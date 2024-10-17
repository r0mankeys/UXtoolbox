import express from 'express'
import path, { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const app = express()
const port = 8080
const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(express.static(path.join(__dirname, '../public'))) // To serve css and js files

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/pages/home.html'))
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
