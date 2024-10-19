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

app.get('/loading', (req, res) => {
    res.status(200).sendFile(
        path.join(__dirname, '../public/pages/loading.html')
    )
})

app.get('/skeleton', (req, res) => {
    res.status(200).sendFile(
        path.join(__dirname, '../public/pages/skeleton.html')
    )
})

app.get('/search', (req, res) => {
    res.status(200).sendFile(
        path.join(__dirname, '../public/pages/search.html')
    )
})

app.get("/scroll", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "../public/pages/scrollspy.html"));
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
