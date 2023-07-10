import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import promotionalEmailRoutes from './routes/promotionalSubscriptionRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
dotenv.config()//config .env file
const app = express()
const port = process.env.PORT || 3000

connectDB()//initialize db connection
// app.use(express.json()),
//     app.use(express.urlencoded({ extended: true }))

app.use('/api/promotional', promotionalEmailRoutes)
app.use(notFound)
app.use(errorHandler)

app.get('/', (req, res) => res.send('API running'))



app.listen(port, () => console.log(`Server Started on port ${port}!`))