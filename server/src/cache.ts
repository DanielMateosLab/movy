import { REDIS_URL } from "./config";
import Redis from "ioredis";
import { BaseRedisCache } from "apollo-server-cache-redis";

/** Returns a redis cache if there is REDIS_URL environment variable.
 *  Otherwise return undefined, so default apollo in-memory LRU cache will be used.
 */
export default function setUpCache() {
  if (REDIS_URL) {
    const client = new Redis(REDIS_URL);

    client.on("connect", () => console.log("Using Redis Cache!"));

    return new BaseRedisCache({ client });
  }

  return undefined;
}
