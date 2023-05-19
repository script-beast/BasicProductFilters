import React from "react";
import "./Styles.css";

import { sidebarprops, objectofstring, product } from "../../Interface";

const Index = (props: sidebarprops) => {
  const { setProducts, inProducts } = props;

  const [UniBrands, setUniBrands] = React.useState<objectofstring>({});
  const [Uniprice, setUniprice] = React.useState<objectofstring>({});
  const [UniCatPrice, setUniCatPrice] = React.useState<objectofstring>({});
  const [Unicategory, setUnicategory] = React.useState<objectofstring>({});

  React.useEffect(() => {
    const brands: objectofstring = {};
    const prices: objectofstring = {};
    const categorys: objectofstring = {};

    inProducts.forEach((product: product) => {
      brands[product.brand] = false;
      prices[product.price] = false;
      categorys[product.category] = false;
    });

    setUniBrands(brands);
    setUniprice(prices);
    setUnicategory(categorys);
    setProducts(inProducts);
  }, [inProducts]);

  const handleFilter = (filter: string, value: string) => {
    const newBrands: objectofstring = { ...UniBrands };
    const newPrice: objectofstring = { ...Uniprice };
    const newcategory: objectofstring = { ...Unicategory };

    console.log(newPrice);

    if (filter === "brand") {
      newBrands[value] = !newBrands[value];
      setUniBrands(newBrands);
    }
    if (filter === "price") {
      // newPrice[value] = !newPrice[value];
      // setUniprice(newPrice);
      const [a, b] = value.split("-");
      for (let i = parseInt(a); i <= parseInt(b); i += 100) {
        newPrice[i] = !newPrice[i];
      }
      setUniprice(newPrice);
      setUniCatPrice((prev: objectofstring) => ({
        ...prev,
        [value]: !prev[value],
      }));
    }
    if (filter === "category") {
      newcategory[value] = !newcategory[value];
      setUnicategory(newcategory);
    }

    const allFalse = Object.values(newBrands).every((item) => !item);
    const allFalse1 = Object.values(newPrice).every((item) => !item);
    const allFalse2 = Object.values(newcategory).every((item) => !item);

    if (allFalse && allFalse1 && allFalse2) {
      setProducts(inProducts);
      return;
    }

    const filteredProducts = inProducts.filter((product: product) => {
      if (
        (newBrands[product.brand] && allFalse1 && allFalse2) ||
        (newPrice[product.price] && allFalse && allFalse2) ||
        (newcategory[product.category] && allFalse && allFalse1) ||
        (newBrands[product.brand] && newPrice[product.price] && allFalse2) ||
        (newBrands[product.brand] &&
          newcategory[product.category] &&
          allFalse1) ||
        (newPrice[product.price] &&
          newcategory[product.category] &&
          allFalse) ||
        (newBrands[product.brand] &&
          newPrice[product.price] &&
          newcategory[product.category])
      ) {
        return true;
      }
      return false;
    });

    setProducts(filteredProducts);
  };

  return (
    <section className="sidebar">
      <div className="border-bottom pb-2 ms-2">
        <h4>Filters</h4>
      </div>
      <div className="py-2 border-bottom ms-3">
        <h6 className="font-weight-bold pb-1">Brands</h6>
        {Object.keys(UniBrands).map((brand) => (
          <div className="form-group" key={brand}>
            <input
              type="checkbox"
              id={brand}
              checked={UniBrands[brand]}
              onChange={() => handleFilter("brand", brand)}
            />
            <label htmlFor={brand}>{brand}</label>
          </div>
        ))}
      </div>
      <div className="py-2 border-bottom ms-3">
        <h6 className="font-weight-bold pb-2">Price</h6>
        {/* {Object.keys(Uniprice).map((price) => (
          <div className="form-group" key={price}>
            <input
              type="checkbox"
              id={price}
              checked={Uniprice[price]}
              onChange={() => handleFilter("price", price)}
            />
            <label htmlFor={price}>{price}</label>
          </div>
        ))} */}

        <div className="form-group">
          <input
            type="checkbox"
            id="below"
            checked={UniCatPrice["below"]}
            onChange={() => handleFilter("price", "0-500")}
          />
          <label htmlFor="below">Below 500</label>
        </div>
        <div className="form-group">
          <input
            type="checkbox"
            id="500-1000"
            checked={UniCatPrice["500-1000"]}
            onChange={() => handleFilter("price", "500-1000")}
          />
          <label htmlFor="500-1000">500-1000</label>
        </div>
        <div className="form-group">
          <input
            type="checkbox"
            id="1000-1500"
            checked={UniCatPrice["1000-1500"]}
            onChange={() => handleFilter("price", "1000-1500")}
          />
          <label htmlFor="1000-1500">1000-1500</label>
        </div>
        <div className="form-group">
          <input
            type="checkbox"
            id="above"
            checked={UniCatPrice["above"]}
            onChange={() => handleFilter("price", "1500-2000")}
          />
          <label htmlFor="above">Above 1500</label>
        </div>
      </div>
      <div className="py-2 ms-3">
        <h6 className="font-weight-bold pb-2">category</h6>
        {Object.keys(Unicategory).map((category) => (
          <div className="form-group" key={category}>
            <input
              type="checkbox"
              id={category}
              checked={Unicategory[category]}
              onChange={() => handleFilter("category", category)}
            />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Index;
