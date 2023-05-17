import React from "react";
import "./Styles.css";

import logopic from "/Imgs/logo.jpg";

import { navbarprops } from "../../Interface";

const Index = (props: navbarprops) => {
  const [Search, setSearch] = React.useState<string>("");
  const { setProducts, inProducts } = props;

  // setProducts(inProducts);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    const filteredProducts = inProducts.filter((product) => {
      if (product.name.toLowerCase().includes(e.target.value.toLowerCase())) {
        return true;
      }
      return false;
    });
    setProducts(filteredProducts);
  };

  return (
    <div className="navbar px-5">
      <div className="navbar__left d-flex">
        <div className="navbar__logo">
          <img className="navbar-brand" src={logopic} alt="logo" />
        </div>
        <div className="navbar__search">
          <input
            type="text"
            placeholder="Search"
            value={Search}
            onChange={handleSearch}
          />
        </div>
      </div>

      <div className="navbar__right d-flex">
        <div className="navbar__cat mx-2 d-flex align-items-center">
          <i className="fa-solid fa-align-right mx-1"></i>
          <div className="">Categories</div>
        </div>
        <div className="navbar__noti mx-2">
          <i className="fa-solid fa-bell"></i>
        </div>
        <div className="navbar__ava mx-2">
          <i className="fa-solid fa-circle-user"></i>
        </div>
      </div>
    </div>
  );
};

export default Index;
