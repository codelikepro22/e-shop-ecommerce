import {Rule, SchemaTypeDefinition} from 'sanity'

const product: SchemaTypeDefinition = {
  title: 'Products',
  name: 'product',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
      validation: (rule: Rule) => rule.required(),
    },
    {
      title: 'SKU',
      name: 'sku',
      type: 'string',
    },
    {
      title: 'Price',
      name: 'price',
      type: 'number',
      validation: (rule: Rule) => rule.required(),
    },
    {
      title: 'Old Price',
      name: 'oldPrice',
      type: 'number',
    },
    {
      title: 'Stock',
      name: 'stock',
      type: 'number',
    },
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
      validation: (rule: Rule) => rule.required(),
    },
    {
      title: 'Category',
      name: 'category',
      type: 'reference',
      to: {type: 'category'},
      validation: (rule: Rule) => rule.required(),
    },
    {
      title: 'Featured',
      name: 'featured',
      type: 'boolean',
    },
    {
      title: 'New Product',
      name: 'new',
      type: 'boolean',
    },
    {
      title: 'Trending',
      name: 'trending',
      type: 'boolean',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
      validation: (rule: Rule) => rule.required(),
    },
  ],
  preview: {
    select: {title: 'title', subtitle: 'category.title', media: 'images.0.asset'},
  },
}

export default product
