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
  items: number[]
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
      const newPoint = {
        name, 
        email, 
        whatsapp, 
        latitude, 
        logitude, 
        city, 
        uf, 
        image_url: "image faker"
      }
      const [point_id]: number[] = await trx("points").insert(newPoint)

      let serialiazedPointItems: { point_id: number, item_id: number }[] = []
      if(items.length > 0) {
        serialiazedPointItems = items.map(item => ({
          point_id,
          item_id: item
        }))
        await trx("point_items").insert(serialiazedPointItems)
      }

      await trx.commit()

      return response.status(201).json({
        id: point_id,
        ...newPoint,
        items: serialiazedPointItems.map((item, index) => ({
          point_id: item.point_id,
          item_id: item.item_id
        }))
      })

    } catch (err) {
      return response.status(400).json()
    }
    
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const point = await Database("points")
      .where('id', id)
      .first()
    if(!point) {
      return response.status(404).json({message: 'point not found'})
    }
    return response.status(200).json(point)
  }
}

export default new PointController()
