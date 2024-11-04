import { serveStatic } from 'hono/deno'
import dotenv from "npm:dotenv";
import process from "node:process"

import app from "./index.tsx"

dotenv.config()

app.use('/assets/*', serveStatic({ root: '/assets' }))

Deno.serve({ hostname: String(process.env.HOST), port: Number(process.env.PORT) }, app.fetch)
