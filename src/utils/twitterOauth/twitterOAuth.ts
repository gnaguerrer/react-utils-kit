/* eslint-disable max-len */
/* eslint-disable camelcase */
import axios from "axios";
import { enc, HmacSHA1 } from "crypto-js";
import { Linking } from "react-native";
import {
  ParamsTwitterSignature,
  RequestTokenData,
  Signature,
  TokenResponse,
} from "./twitter.types";

/**
 * Implementation from: https://developer.twitter.com/en/docs/authentication/guides/log-in-with-twitter
 * Step 1: https://developer.twitter.com/en/docs/authentication/api-reference/request_token
 * Step 2: https://developer.twitter.com/en/docs/authentication/api-reference/authenticate
 * Step 3: https://developer.twitter.com/en/docs/authentication/api-reference/access_token
 * Generate Signature: https://developer.twitter.com/en/docs/authentication/oauth-1-0a/creating-a-signature
 */

// Twitter's API Urls.
const REQUEST_TOKEN = "https://api.twitter.com/oauth/request_token";
const REQUEST_AUTHENTICATE = "https://api.twitter.com/oauth/authenticate";
const REQUEST_ACCESS_TOKEN_USER = "https://api.twitter.com/oauth/access_token";

// Client Twitter keys
const TWITTER_CONSUMER_KEY = "";
const TWITTER_CONSUMER_SECRET = "";
const CALLBACK_URL = "";

export const handleLoginTwitter = async (): Promise<void> => {
  const obtainRequestTokenConfig: RequestTokenData = {
    apiUrl: REQUEST_TOKEN,
    callbackUrl: CALLBACK_URL,
    consumerKey: TWITTER_CONSUMER_KEY,
    consumerSecret: TWITTER_CONSUMER_SECRET,
    method: "POST",
    requestTokenUrl: REQUEST_TOKEN,
  };

  const requestTokenData = await obtainOauthRequestToken(
    obtainRequestTokenConfig
  );
  if (requestTokenData?.oauth_token) {
    authenticateTwitter(requestTokenData?.oauth_token);
  }
};

// Request a oauth_token to sign in.
// Step 1: https://developer.twitter.com/en/docs/authentication/api-reference/request_token
const obtainOauthRequestToken = async ({
  consumerKey,
  consumerSecret,
  callbackUrl,
  method,
  apiUrl,
  requestTokenUrl,
}: RequestTokenData): Promise<TokenResponse | null> => {
  const oauthSignature = requestTokenSignature({
    method,
    apiUrl,
    callbackUrl,
    consumerKey,
    consumerSecret,
    requestTokenUrl,
  });
  const authHeader = `OAuth oauth_callback="${CALLBACK_URL}", oauth_consumer_key="${oauthSignature.oauth_consumer_key}", oauth_nonce="${oauthSignature.oauth_nonce}", oauth_signature="${oauthSignature.oauth_signature}", oauth_signature_method="${oauthSignature.oauth_signature_method}", oauth_timestamp="${oauthSignature.oauth_timestamp}", oauth_version="${oauthSignature.oauth_version}"`;
  try {
    const config = {
      method,
      url: REQUEST_TOKEN,
      headers: {
        Authorization: authHeader,
      },
    };
    const res = await axios(config);
    if (res?.data) {
      return parseOAuthRequestToken(res?.data);
    }
    return null;
  } catch (err) {
    console.error("obtainOauthRequestToken", err);
    return null;
  }
};

// Authenticate oauth_token from POST request. Open a Twitter link to sign in
// Step 2: https://developer.twitter.com/en/docs/authentication/api-reference/authenticate
const authenticateTwitter = async (token: string): Promise<void> => {
  const authUrl = `${REQUEST_AUTHENTICATE}?oauth_token=${token}`;
  const supported = await Linking.canOpenURL(authUrl);
  if (supported) {
    await Linking.openURL(authUrl);
  }
};

// Get user data fron Twitter. Handle to Twitter callback
// Step 3: https://developer.twitter.com/en/docs/authentication/api-reference/access_token
export const handleTwitterCallback = async (url: string): Promise<void> => {
  let response = null;
  const payload = url.split("?")[1].split("&");
  const oauth_token = payload[0].split("=")[1];
  const oauth_verifier = payload[1].split("=")[1];
  const twitterResponse = await axios.post(
    `${REQUEST_ACCESS_TOKEN_USER}?oauth_verifier=${oauth_verifier}&oauth_token=${oauth_token}`
  );
  if (twitterResponse) {
    response = twitterResponse.data;
  }
  return response;
};

// Parse string response to object
const parseOAuthRequestToken = (response: string): TokenResponse => {
  const keyValues = response.split("&");
  const oauth_token = keyValues[0].split("=")[1];
  const oauth_token_secret = keyValues[1].split("=")[1];
  const oauth_callback_confirmed = keyValues[2].split("=")[1];

  return { oauth_token, oauth_token_secret, oauth_callback_confirmed };
};

// Define params to sign in and request signature
const requestTokenSignature = ({
  method,
  apiUrl,
  callbackUrl,
  consumerKey,
  consumerSecret,
}: RequestTokenData): Signature => {
  const params: ParamsTwitterSignature = {
    oauth_consumer_key: consumerKey,
    oauth_version: "1.0",
    oauth_signature_method: "HMAC-SHA1",
    oauth_callback: callbackUrl,
    oauth_timestamp: (Date.now() / 1000).toFixed(),
    oauth_nonce: Math.random()
      .toString(36)
      .replace(/[^a-z]/, "")
      .substr(2),
  };

  return makeSignature(params, method, apiUrl, consumerSecret);
};

// Generate asignature with params using HMAC-SH1 algorithm
const makeSignature = (
  params: ParamsTwitterSignature,
  method: string,
  apiUrl: string,
  consumerSecret: string
): Signature => {
  const paramsBaseString = Object.keys(params)
    .sort()
    .reduce((prev: string, el: string): string => {
      return `${prev}&${el}=${params[el as keyof ParamsTwitterSignature]}`;
    }, "")
    .substr(1);
  const signatureBaseString = `${method.toUpperCase()}&${encodeURIComponent(
    apiUrl
  )}&${encodeURIComponent(paramsBaseString)}`;

  const signingKey = `${encodeURIComponent(consumerSecret)}&`;

  const oauth_signature = enc.Base64.stringify(
    HmacSHA1(signatureBaseString, signingKey)
  );

  const paramsWithSignature = {
    ...params,
    oauth_signature: encodeURIComponent(oauth_signature),
  };

  return paramsWithSignature;
};
