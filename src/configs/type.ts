import { StaticImageData } from "next/image"

export type ProductsType = {
  id: number
  name: string
  type: string
  price: number
  rating: number
  image: StaticImageData
  popular: boolean
  discount: number
  discountPrice: number
  company: string
}