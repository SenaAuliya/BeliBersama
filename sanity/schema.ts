import { type SchemaTypeDefinition } from 'sanity'
import { Products } from './schemas/Product'
import category from './schemas/category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Products, category]
}
