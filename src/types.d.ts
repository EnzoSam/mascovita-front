export interface Link {
    href: string;
    text: string;
  }
  
  export interface Slide {
    image: string;
    alt: string;
    caption: string;
  }
  
  export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
  }

  export interface Filter
  {
    categoryId:string
  }
