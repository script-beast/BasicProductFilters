interface product {
  id: number;
  name: string;
  price: number;
  description: string;
  reviews: number;
  brand: string;
  category: string;
}

interface sidebarprops {
  setProducts: React.Dispatch<React.SetStateAction<product[]>>;
  inProducts: product[];
}

interface productprops {
  products: product[];
}

interface objectofstring {
  [key: string]: boolean;
}

interface navbarprops {
  setProducts: React.Dispatch<React.SetStateAction<product[]>>;
  inProducts: product[];
}

export type {
  product,
  sidebarprops,
  productprops,
  objectofstring,
  navbarprops,
};
