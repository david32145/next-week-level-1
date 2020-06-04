import {Router, static as ExpressStatic } from "express"
import path from "path"

import ItemController from "./controllers/ItemController"
import PointController from "./controllers/PointController"

const routes = Router()

routes
  .get("/files", ExpressStatic(path.resolve(__dirname, "..", "uploads")))

routes
  .get("/items", ItemController.index)

routes
  .post("/points", PointController.store)
  .get("/points/:id", PointController.show)
  .get("/points", PointController.index)

export default routes