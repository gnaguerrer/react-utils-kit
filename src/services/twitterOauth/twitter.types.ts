export interface RequestTokenData {
	method: string
	apiUrl: string
	callbackUrl?: string
	consumerKey: string
	consumerSecret: string
	requestTokenUrl: string
}

export interface TokenResponse {
	oauth_token: string
	oauth_token_secret: string
	oauth_callback_confirmed?: string
}

export interface Signature {
	oauth_consumer_key: string
	oauth_version: string
	oauth_signature_method: string
	oauth_callback?: string
	oauth_timestamp: string
	oauth_nonce: string
	oauth_signature: string
}

export interface ParamsTwitterSignature {
	oauth_consumer_key: string
	oauth_version: string
	oauth_signature_method: string
	oauth_callback?: string
	oauth_timestamp: string
	oauth_nonce: string
}
