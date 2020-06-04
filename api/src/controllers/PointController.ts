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

type Query = {city: string, uf: string, items: string}


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
        image_url: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
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

    const items = await Database("items")
      .select("items.id", "items.title", "items.image_url")
      .join("point_items", "items.id", "point_items.item_id")
      .where("point_items.point_id", point.id)
    point.items = items
    if(!point) {
      return response.status(404).json({message: 'point not found'})
    }
    return response.status(200).json(point)
  }

  public async index(request: Request<{}, {}, {}, Query>, response: Response): Promise<Response> {
    const { city, uf, items } = request.query
    const itemsString = String(items).split(",").map(s => Number(s.trim()))
    const points = await Database("points")
      .join("point_items", "points.id", "=","point_items.point_id")
      .whereIn("point_items.item_id", itemsString)
      .where("city", city)
      .where("uf", uf)
      .distinct()
      .select("points.*")

    return response.status(200).json(points)
  }
}

export default new PointController()
