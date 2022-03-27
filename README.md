# MOVY

A service to get the details of your favourite apps. See the live version [here](https://movy-ashen.vercel.app/)!

## Architecture

- Server API: an Apollo Server that uses different data sources to serve the client requests. You can find it in the `server/` folder.

  - Data sources:
    - OMDB Open REST API: external service to search for movies and movie details.
    - Apollo In-Memory LRU or Redis Cache: caching service to save unnecesary calls to OMDB API source. Cached results have a max. age of 24 hours.

- Client App: a NextJS & React app that consumes a graphQL API with Apollo Client. Ideally it will be served from a CDN in production. It is in the `client/` folder.
  - Features:
    - Search shows by title and type. Searches are tracked with the url query parameters, allowing you to go back and forth using the browser history and to share or save searches using the url.
    - See show details: if you click in a show you will be redirected to a page with more details
      of the given show.
  - Read instructions: to have a look at the code I recommend going to `pages/index` and `pages/show/[id]`. They are the entrypoints of the app and from there you can dive deeper and understand everything.

## Developer Set Up Instructions

1. An OMDb api key is required to work locally. Provide it in `server/.env` as shown in the `server/.env.example` file. If you don't have one, you can get it [here](https://www.omdbapi.com/apikey.aspx).

2. Open a terminal in the `server` directory and run `npm install && npm run dev`. This will start the server in port 4000. This uses Apollo LRU in-memory cache. To set up caching with redis read [here](#Redis).
3. Open a terminal in the `client` directory.
4. Copy the `.env.example` file into `.env.local`. With linux you can use `cp .env.example .env.loval`
5. Install necessary packages and start the server with `npm install && npm run dev`.

### Redis

If you want to use a redis cache, you must provide a `REDIS_URL` EV in the dotenv file. If you have docker installed use `redis://127.0.0.1:6379` and run `npm run dev:redis`.

### Sidenotes

- There are jest tests in both client and server. To run them use `npm test` in both the client and the server folders.
- I used `@graphql-codegen` to generate types out of the schema. You can re-generate them
  with `npm run codegen`. When using `dev*` scripts, they are re-generated whenever the schema files are changed.

## Suggested Deploy Instructions

### Server - Heroku CLI

Assuming you have installed heroku CLI and you are logged in:

- Create a heroku app with `heroku create -a <your-app-name>`
- From the root folder, use `git subtree push --prefix server heroku main`. This will push just the server folder as an isolated app to the heroku remote.
- Set the `OMDb_API_KEY` environment variable.
- Optionally, to use a redis cache, run `heroku addons:create heroku-redis:hobby-dev -a <your-app-name>`. This should set up the redis instance and update the `REDIS_URL` EV for you.

### Client - Vercel

- Using vercel, just create a new project and set the client folder as the entry point.

## TODO

- Add integration tests for the client.
- Currently the pagination system is the OMDb API pagination. This is not optimal because there are shows discarded by the server, so some pages are really small ([example](https://movy-ashen.vercel.app/?title=harry+potter&type=ALL&page=2)). To solve it I would create a different pagination system in the apollo graphql server.
- Add a users' feature, so users can sign up and make lists of shows (favourites, to-watch, etc.)
