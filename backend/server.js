import express from "express"
import dotenv from "dotenv"
dotenv.config()
const port = process.env.PORT || 8000
import mongoose from "mongoose"
import products from "./data/products.js"

const app = express()

app.get("/", (req, res, next) => {
    res.send("hello")
})

app.get("/api/products", (req, res, next) => {
    res.json(products)
})

app.get("/api/products/:id", (req, res, next) => {
    const product = products.find(item => item._id === req.params.id)
    res.status(200).json(product)
})

try {
    await mongoose.connect(process.env.MONGO_URI)
    app.listen(port, () => {
        console.log(`server running on PORT ${port}`);
    })
} catch (error) {
    console.log(error);
    process.exit(1)
}
