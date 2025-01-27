import spotifyApi from '@lib/spotify/spotify';

export const autoRefreshToken = (timeoutInSeconds: number) => {
  // Calculate the time to refresh the token, 5 minutes before expiration
  const refreshTime = Math.max((timeoutInSeconds - 5 * 60) * 1000, 0); // Prevent negative timeouts

  // Set the timeout
  const timeoutId = setTimeout(async () => {
    try {
      const data = await spotifyApi.refreshAccessToken(); // Refresh the token
      console.log(
        'Access token refreshed successfully:',
        data.body.access_token,
      );

      // Schedule the next refresh based on the new token's expiration
      autoRefreshToken(data.body.expires_in); // Recursively schedule the next refresh
    } catch (error) {
      console.error('Error refreshing access token:', error);
      // You may want to retry or notify the user depending on the failure
    }
  }, refreshTime);

  return timeoutId; // Return the timeout ID if you want to manage it
};
