import { Request, Response } from "express";
import Database from "../database/connection";

interface RequestBody {
  name: string
  email: string
  whatsapp: string
  latitude: number
  logitude: number
  city: string
  uf: string
  items: string[]
}

class PointController {
  public async store(request: Request<{}, {}, RequestBody>, response: Response): Promise<Response> {
    const {
      name,
      email,
      whatsapp,
      latitude,
      logitude,
      city,
      uf,
      items = []
    } = request.body
    const [point_id] = await Database("points").insert({
      name, 
      email, 
      whatsapp, 
      latitude, 
      logitude, 
      city, 
      uf, 
      image_url: "image faker"
    })

    if(items.length > 0) {
      const serialiazedPointItems = items.map(item => ({
        point_id,
        item_id: item
      }))
      await Database("point_items").insert(serialiazedPointItems)
    }


    return response.status(201).json({
      success: true
    })
  }
}

export default new PointController()
