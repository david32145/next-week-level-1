import express from "express"
import path from "path"
import routes from "./routes"

const app = express()

app.use(express.json())
app.use(routes)

const PORT = process.env.PORT || 3333

app.listen(PORT)