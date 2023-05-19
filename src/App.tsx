import React from "react";
import "./App.css";

import Data from "../src/assets/Data.json";

import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import ProductList from "./Components/ProductList";

import { product } from "./Interface";

function App() {
  const [inProducts, setInProducts] = React.useState<product[]>([]);
  const [products, setProducts] = React.useState<product[]>([]);

  React.useEffect(() => {
    console.log(Data);
    setInProducts(Data);
    setProducts(Data);
  }, []);

  return (
    <div className="">
      <Navbar setProducts={setProducts} inProducts={inProducts} />
        <div className="d-flex justify-content-center">
      <div className="mainbody">
          <Sidebar setProducts={setProducts} inProducts={inProducts} />
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
}

export default App;
