import { ChiselEntity } from "@chiselstrike/api"
import { Category } from "./Category"

export class Product extends ChiselEntity {
  name: string
  price: number
  image: string
  details: string
  soldOut: boolean = false
  category: Category = new Category()
  createdAt: Date = new Date()
}