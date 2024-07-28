import express from "express"
import dotenv from "dotenv"
dotenv.config()
const port = process.env.PORT || 8000
import products from "./data/products.js"

const app = express()

app.get("/", (req, res, next) => {
    res.send("hello")
})

app.get("/api/products", (req, res, next) => {
    res.json(products)
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})