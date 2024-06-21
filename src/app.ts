import express from 'express'
import databaseService from '~/services/database.services'
import usersRouter from './routes/users.routes'
const app = express()

const PORT = 3000
databaseService.connect()
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json())
app.use('/users', usersRouter)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
