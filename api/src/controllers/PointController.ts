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

    try {
      const trx = await Database.transaction()
      const [point_id] = await trx("points").insert({
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
        await trx("point_items").insert(serialiazedPointItems)
      }
      
      await trx.commit()

      return response.status(201).json({
        success: true
      })

    } catch (err) {
      return response.status(400).json()
    }
    
  }
}

export default new PointController()
