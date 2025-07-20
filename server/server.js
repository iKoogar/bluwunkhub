import express from 'express'
import cors from 'cors'
import fanartRouter from './routes/fanart.js'

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

app.use('/api/fanart', fanartRouter)

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))