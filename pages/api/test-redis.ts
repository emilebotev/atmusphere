import { createClient } from 'redis';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const client = createClient({
    url: process.env.REDIS_URL,
  });

  client.on('error', (err: unknown) =>
    console.error('Redis Client Error:', err),
  );

  try {
    await client.connect();
    console.log('Connected to Redis!');

    // Perform test operations
    await client.set('test_key', 'Hello, Redis!');
    const value = await client.get('test_key');
    console.log('Retrieved value:', value);

    await client.quit();
    res
      .status(200)
      .json({ success: true, message: 'Redis test completed', value });
  } catch (err) {
    console.error('Error during Redis test:', err);
    res.status(500).json({ success: false, error: (err as Error).message });
  }
}
