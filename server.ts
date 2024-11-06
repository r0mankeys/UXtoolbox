import { serveStatic } from 'hono/deno'

import app from "./index.tsx"

app.get('/assets/favicon.svg', (c) => {
  return c.text('Icon is available');
});

app.use('/assets/*', serveStatic({ root: './assets' }))

Deno.serve(app.fetch)
