export const OMDb_API_KEY = process.env.OMDb_API_KEY;

/** Ensures the necessary config vars are present,
 *  alerting the user and terminating the process otherwise. */
export default function checkConfigVars() {
  if (!OMDb_API_KEY) {
    console.error(`
    Missing OMDb_API_KEY environment variable. If you haven't one get it from here:
    https://www.omdbapi.com/apikey.aspx`);
    process.exit(1);
  }
}
