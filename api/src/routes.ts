import {Router, static as ExpressStatic } from "express"
import path from "path"

import ItemController from "./controllers/ItemController"

const routes = Router()

routes
  .get("/files", ExpressStatic(path.resolve(__dirname, "..", "uploads")))

routes
  .get("/items", ItemController.index)

export default routes