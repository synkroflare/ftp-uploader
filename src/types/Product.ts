export interface Product {
  id: number;
  name: {
    pt: string;
  };
  description: {
    pt: string;
  };
  handle: {
    pt: string;
  };
  attributes: Array<{
    pt: string;
  }>;
  published: boolean;
  free_shipping: boolean;
  requires_shipping: boolean;
  canonical_url: string;
  video_url: string | null;
  seo_title: {
    pt: string;
  };
  seo_description: {
    pt: string;
  };
  brand: string;
  created_at: string;
  updated_at: string;
  variants: Variant[];
  tags: string;
  images: Image[];
  categories: Category[];
}

export interface Variant {
  id: number;
  image_id: number;
  product_id: number;
  position: number;
  price: string;
  compare_at_price: string;
  promotional_price: string | null;
  stock_management: boolean;
  stock: number | null;
  weight: string;
  width: string;
  height: string;
  depth: string;
  sku: string;
  values: Array<{
    pt: string;
  }>;
  barcode: string | null;
  mpn: string | null;
  age_group: string | null;
  gender: string | null;
  created_at: string;
  updated_at: string;
  cost: string | null;
  inventory_levels: InventoryLevel[];
}

export interface InventoryLevel {
  id: number;
  variant_id: number;
  location_id: string;
  stock: number | null;
}

export interface Image {
  id: number;
  product_id: number;
  src: string;
  position: number;
  alt: string[];
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: number;
  name: {
    pt: string;
  };
  description: {
    pt: string;
  };
  handle: {
    pt: string;
  };
  parent: Category | null;
  subcategories: number[];
  seo_title: {
    pt: string;
  };
  seo_description: {
    pt: string;
  };
  google_shopping_category: string;
  created_at: string;
  updated_at: string;
}
