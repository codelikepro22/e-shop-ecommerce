import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'e-shop-ecommerce',

  projectId: 'wusd22zr',
  dataset: 'e-shop',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
