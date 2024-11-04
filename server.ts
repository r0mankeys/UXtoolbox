import { serveStatic } from 'hono/deno'
import dotenv from "npm:dotenv";
import { join, dirname } from "https://deno.land/std/path/mod.ts";
import process from "node:process"

import app from "./index.tsx"

dotenv.config()

app.use(serveStatic({ root: join(dirname(import.meta.url), "assets") }));

Deno.serve({ hostname: String(process.env.HOST), port: Number(process.env.PORT) }, app.fetch)
