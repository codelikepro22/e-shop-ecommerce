export interface Product {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: Date;
  category: Category;
  description: Description[];
  featured: boolean;
  images: Image[];
  price: number;
  sku: string;
  slug: Slug;
  stock: number;
  title: string;
}

export interface Category {
  _ref: string;
  _type: string;
}

export interface Description {
  _key: string;
  _type: string;
  children: Child[];
  level: number;
  listItem: string;
  markDefs: any[];
  style: string;
}

export interface Child {
  _key: string;
  _type: string;
  marks: any[];
  text: string;
}

export interface Image {
  _key: string;
  _type: string;
  asset: Category;
}

export interface Slug {
  _type: string;
  current: string;
}
