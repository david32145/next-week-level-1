import Database from "../database/connection"
import { Request, Response } from "express"

const SERVER_STATIC_URI = process.env.SERVER_STATIC_URI || "http://localhost:3333/files"

class ItemController {
  async index(request: Request, response: Response): Promise<Response> {
    const items = await Database("items").select("*")
    const seriliazedItems = items.map(item => ({
      id: item.id,
      title: item.title,
      image_url: `${SERVER_STATIC_URI}/${item.image_url}`
    }))
    return response.status(200).json(seriliazedItems)
  }
}

export default new ItemController()