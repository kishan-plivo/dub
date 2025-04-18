import Redis from "ioredis";

// Initiate Redis instance by connecting to localhost:6379
export const redis = new Redis();

// Optionally, you can use environment variables like this:
// export const redis = new Redis({
//   host: process.env.REDIS_HOST || '127.0.0.1',
//   port: process.env.REDIS_PORT ? parseInt(process.env.REDIS_PORT, 10) : 6379,
//   // Add password if your local redis requires it
//   // password: process.env.REDIS_PASSWORD,
// });
