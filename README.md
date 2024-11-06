# UXtoolbox&nbsp; 🧰

![My Skills](https://go-skill-icons.vercel.app/api/icons?i=ts,hono,deno,tailwindcss)

## Description

This project is still very much in it's infnacy, but the goal is to create a toolbox for web-developers to use styled components that follow best accessibility practices

This project was also a way for me to learn how to use different technogoies, Most of this stack is new to me _(I used Twind instead of TailwindCSS directly)_ and I have to say I love using JSX on the server side. And Typescript is a godsend.

## Setup

clone the repository and run the following command in the terminal:

```bash
touch .env && echo "PORT=<port>\nHOST=<host>" > .env
```

then make the `server.ts` file look similar to the following

```typescript
import dotenv from "npm:dotenv";
import process from "node:process"

import app from "./index.tsx"

dotenv.config()

Deno.serve({ hostname: String(process.env.HOST), port: Number(process.env.PORT) }, app.fetch)
```

## Goals

- [x] Deploy MVP
- [ ] Create a component (or component tree) for the Loading Screen

## Problems

- [ ] Serving the static files (favicon.svg) upon deployment
