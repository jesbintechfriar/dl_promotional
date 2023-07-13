import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import adminRoutes from './routes/adminRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import apiRoutes from './routes/apiRoutes.js';
dotenv.config()//config .env file
const app = express()
const port = process.env.PORT || 3000

connectDB()//initialize db connection
// app.use(express.json()),
//     app.use(express.urlencoded({ extended: true }))

app.use('/api/promotion-email', adminRoutes);
app.use('/public/promotion-email', apiRoutes);


app.use(errorHandler)

app.get('/', (req, res) => res.send('API running'))
app.use(notFound)


app.listen(port, () => console.log(`Server Started on port ${port}!`))