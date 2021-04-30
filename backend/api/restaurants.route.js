import express from "express"

const routes = express.Router()

// one route- demo route
// root url will respond with hello world
routes.route("/").get((req, res) => res.send("hello world"))

export default routes