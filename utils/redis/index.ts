import { createClient, RedisClientType } from 'redis';

class Database {
  private client: RedisClientType;
  private static instance: Database;

  private connected = false;
  constructor() {
    this.client = createClient({ url: process.env.REDIS_URL });
  }

  public static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  private async ensureConnected() {
    if (this.connected) {
      try {
        await this.client.connect();
        this.connected = true;
      } catch (error) {
        console.error('Error connecting to Redis', error);
        throw error;
      }
    }
  }

  public async saveUserData(userId: string, data: Object) {
    try {
      await this.ensureConnected();
      const key = `user:${userId}`;
      const value = JSON.stringify(data);

      return this.client.set(key, value);
    } catch (error) {
      console.error('Error saving user data to Redis:', error);
      throw error;
    }
  }

  public async getUserData(userId: string) {
    try {
      await this.ensureConnected();
      const key = `user:${userId}`;
      const data = await this.client.get(key);

      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Error retrieving user data from Redis:', error);
      throw error;
    }
  }
}

export const database = Database.getInstance();
