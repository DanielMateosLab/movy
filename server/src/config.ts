export const OMDb_API_KEY = process.env.OMDb_API_KEY;
export const REDIS_URL = process.env.REDIS_URL;

/** Ensures the necessary config vars are present,
 *  alerting the user and terminating the process otherwise. */
export default function checkConfigVars() {
  if (!OMDb_API_KEY) {
    console.error(`
    Missing OMDb_API_KEY environment variable. If you haven't one get it from here:
    https://www.omdbapi.com/apikey.aspx`);
    process.exit(1);
  }
  if (!REDIS_URL) {
    console.log(`
      Using default Apollo LRU in-memory cache.
      If you want to use redis, provide a REDIS_URL environment variable.`);
  }
}
