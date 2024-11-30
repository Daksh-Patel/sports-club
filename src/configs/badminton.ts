type BadmintonType = {
  id: number
  name: string
  type: string
  price: number
  rating: number
  image: string
  popular: boolean
  discount: number
  discountPrice: number
  company: string
}

export const Badminton: BadmintonType[] = [
  {
    id: 1,
    name: "Yonex Astrox 100 ZZ",
    type: "Badminton Racket",
    price: 12000,
    rating: 4.9,
    image: "https://example.com/images/yonex-astrox-100-zz.jpg",
    popular: true,
    discount: 15,
    discountPrice: 10200,
    company: "Yonex",
  },
  {
    id: 2,
    name: "Li-Ning N90 III",
    type: "Badminton Racket",
    price: 10500,
    rating: 4.8,
    image: "https://example.com/images/li-ning-n90-iii.jpg",
    popular: true,
    discount: 10,
    discountPrice: 9450,
    company: "Li-Ning",
  },
  {
    id: 3,
    name: "Victor Brave Sword 12",
    type: "Badminton Racket",
    price: 8000,
    rating: 4.5,
    image: "https://example.com/images/victor-brave-sword-12.jpg",
    popular: true,
    discount: 12,
    discountPrice: 7040,
    company: "Victor",
  },
  {
    id: 4,
    name: "Babolat X Feel",
    type: "Badminton Racket",
    price: 6500,
    rating: 4.2,
    image: "https://example.com/images/babolat-x-feel.jpg",
    popular: false,
    discount: 8,
    discountPrice: 5980,
    company: "Babolat",
  },
  {
    id: 5,
    name: "Yonex Voltric Z Force II",
    type: "Badminton Racket",
    price: 11000,
    rating: 4.7,
    image: "https://example.com/images/yonex-voltric-z-force-ii.jpg",
    popular: true,
    discount: 10,
    discountPrice: 9900,
    company: "Yonex",
  },
  {
    id: 6,
    name: "Li-Ning Super Series 9900",
    type: "Badminton Racket",
    price: 9500,
    rating: 4.6,
    image: "https://example.com/images/li-ning-super-series-9900.jpg",
    popular: true,
    discount: 15,
    discountPrice: 8075,
    company: "Li-Ning",
  },
  {
    id: 7,
    name: "Victor Auraspeed 90K",
    type: "Badminton Racket",
    price: 10500,
    rating: 4.4,
    image: "https://example.com/images/victor-auraspeed-90k.jpg",
    popular: false,
    discount: 10,
    discountPrice: 9450,
    company: "Victor",
  },
]