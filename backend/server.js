import express from "express"
import dotenv from "dotenv"
dotenv.config()
const port = process.env.PORT || 8000
import mongoose from "mongoose"
const app = express()

// Routers
import ProductRouter from './routes/productRouter.js'
import { errorHandler, notFound } from "./middleware/errorMiddleware.js"

// Routes
app.use("/api/products", ProductRouter)

// Error handler
app.use(notFound)
app.use(errorHandler)

try {
    await mongoose.connect(process.env.MONGO_URI)
    app.listen(port, () => {
        console.log(`server running on PORT ${port}`);
    })
} catch (error) {
    console.log(error);
    process.exit(1)
}
