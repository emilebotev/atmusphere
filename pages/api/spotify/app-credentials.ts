import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';

import spotifyApi from '@lib/spotify/spotify';
import { autoRefreshToken } from 'utils/spotify/autorefresh_token';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  try {
    const clientCredentialsResponse = await spotifyApi.clientCredentialsGrant();

    const {
      body: { access_token, expires_in },
    } = clientCredentialsResponse;

    spotifyApi.setAccessToken(access_token);
    autoRefreshToken(expires_in);
    console.log(`Authenticated with access token: ${access_token}`);
    res.status(200).json(access_token);
  } catch (error) {
    console.error('Error in App credentials flow', error);
    res.status(500).json({ error: 'Failed to retrieve access token' });
  }
};

export default handler;
