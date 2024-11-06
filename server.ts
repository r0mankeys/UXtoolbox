import { serveStatic } from 'hono/deno'

import app from "./index.tsx"

app.use(serveStatic({ root: "/assets" }))

Deno.serve(app.fetch)
