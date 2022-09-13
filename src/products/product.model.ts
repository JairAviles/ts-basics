export type Sizes = 'XS' | 'S' | 'M' | 'L' | 'XL'

export type Product = {
  name: string,
  createdAt: Date,
  stock: number,
  size?: Sizes
}
