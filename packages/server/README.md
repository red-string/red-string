# RedString Backend

## Tech Stack

- Vercel Now - deployment
- TypeScript - language
- Neo4j - database for graph relationships
- Redis - document caching

## Structure

the `/api/` folder contains the main serverless functions as required by the Now configuration.

## Setup

You must have a Vercel account and install the Vercel cli globally:

```shell
yarn global add vercel
```

Make sure you are in the `/packages/server/` namespace and run

```shell
vercel dev
```

It will want to associate with a project in your account. Create a new one and name it what you want. You will not need to push this up, as we will use my account for hosting the backend (and frontend?).

Now you can run the last command again and you should be able to hit the endpoints `http://localhost:3000/api/` `get-date` or `get-user`.

No build is necessary to work with Vercel. It reads all TS and Python without a build step. We use the tsconfig for linting purposes.

### Python

I've included an env here, but I'm doubtful we'll need it. If you have the Python 3 installed you can run this to activate the env.

```bash
source red-string-env/bin/activate
```

### Start up

From the root folder run `yarn develop` and it will stream the command to submodules. This server will startup on that command from either the root or this directory.

