import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';

import spotifyApi from '@lib/spotify/spotify';
import { autoRefreshToken } from 'utils/spotify/autorefresh_token';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  try {
    const { code, state } = req.query;

    if (typeof code !== 'string') {
      return;
    }

    const authorizationCodeGrantResponse =
      await spotifyApi.authorizationCodeGrant(code);
    const { access_token, expires_in, refresh_token } =
      authorizationCodeGrantResponse.body;

    spotifyApi.setAccessToken(access_token);
    spotifyApi.setRefreshToken(refresh_token);

    autoRefreshToken(expires_in);

    const userDetails = await spotifyApi.getMe();

    console.log(userDetails.body);

    res.status(200).json({});
  } catch (error) {
    console.error('Error in retrieving access token', JSON.stringify(error));
    res.status(500).json({ error: 'Failed to retrieve access token' });
  }
};

export default handler;
