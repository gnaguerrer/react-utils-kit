# Twitter OAuth Service

This module provides functionality for integrating Twitter OAuth authentication into your React Native application. It allows users to sign in with their Twitter accounts, following the OAuth 1.0a authentication flow as specified by Twitter's documentation.

## Overview

The implementation is based on Twitter's OAuth authentication guide, comprising three main steps:

1. **Obtain Request Token**: Fetches a temporary request token from Twitter's API.
2. **Authenticate**: Opens a Twitter authentication link for the user to sign in.
3. **Handle Callback**: Retrieves user data from Twitter upon successful authentication.

## Usage

### Step 1: Obtain Request Token

```javascript
const LoginWithTwitterButton = () => {
  const getUrlAsync = async (): Promise<void> => {
    Linking.getInitialURL();
    Linking.addEventListener("url", async ({ url }) => {
      const responseTwitter = await handleTwitterCallback(url);
      // Handle twitter response
    });
  };

  useEffect(() => {
    getUrlAsync();
    return () => {
      Linking.removeAllListeners("url");
    };
  }, []);

  const handleLogin = async () => {
    await handleLoginTwitter();
  };

  return (
    <TouchableOpacity onPress={handleLogin} style={styles.button}>
      <Text style={styles.buttonText}>Login with Twitter</Text>
    </TouchableOpacity>
  );
};
```

## Configuration

Before using the service, make sure to configure the following constants with your Twitter API keys:

- `TWITTER_CONSUMER_KEY`: Your Twitter consumer key.
- `TWITTER_CONSUMER_SECRET`: Your Twitter consumer secret.
- `CALLBACK_URL`: The callback URL registered with your Twitter application.

## Dependencies

This service depends on `axios` for making HTTP requests and `react-native` for opening links in the device's default browser.
