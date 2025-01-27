import { NextApiRequest, NextApiResponse } from 'next';
import { randomBytes } from 'crypto';

import spotifyApi from '@lib/spotify/spotify';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  try {
    spotifyApi.resetAccessToken();

    const scopes = ['user-read-private', 'user-read-email'];
    const state = randomBytes(16).toString('hex');

    const authorizeUrl = spotifyApi.createAuthorizeURL(scopes, state, true);

    res.status(200).json(authorizeUrl);
  } catch (error) {
    console.error('Error in User authorization flow', error);
    res.status(500).json({ error: 'Failed to retrieve authorize url' });
  }
};

export default handler;
