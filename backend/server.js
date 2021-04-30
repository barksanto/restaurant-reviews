import express from "express"
import cors from "cors"
import restaurants from "./api/restaurants.route.js"

// what we use to make our server
const app = express()

// apply middleware
app.use(cors())
app.use(express.json()) //our server can accept json in the body of a request, so if  someone sends get/post request it will be able to read json

// this will be our main url + whats in the quotes here
app.use("/api/v1/restaurants", restaurants)
// if anybody goes to a route thats not in our route file- just return a 404 page
app.use("*", (req, res) => res.status(404).json({ error: "not found" }))

// so we can import this module in the file that accesses the database
export default app