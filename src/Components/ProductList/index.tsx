import React from "react";

import "./Styles.css";

import { product, productprops } from "../../Interface";

const Categories = (props: productprops) => {
  const [products, setProducts] = React.useState<product[]>([]);

  React.useEffect(() => {
    setProducts(props.products);
  }, [props.products]);

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const newProduct = [...products];

    if (value === "Low")
      newProduct.sort((a: product, b: product) => a.price - b.price);
    else newProduct.sort((a: product, b: product) => b.price - a.price);

    setProducts(newProduct);
  };

  const renderProducts = () => {
    return products.map((product: product) => (
      <div
        key={product.id}
        className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1 my-2"
      >
        <div className="card">
          <img
            className="card-img-top"
            src="https://images.unsplash.com/photo-1559239115-ce3eb7cb87ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1088&q=80"
          />
          <div className="card-body">
            <h5>
              <b>{product.name}</b>
            </h5>
            <div className="d-flex flex-row my-2">
              <div className="text-muted">{product.category}</div>
            </div>
            <div className="d-flex flex-row my-2">
              <div className="text-muted">{product.brand}</div>
            </div>
            <div className="d-flex flex-row my-2 align-items-center">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half-stroke"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <div className="text-muted ms-2">({product.reviews})</div>
            </div>
            <div className="d-flex flex-row my-2">
              <div className="text-muted">{product.price}</div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section className="products">
      <div className="container">
        <div className="d-flex flex-row my-3">
          <div className="text-muted m-2">
            Home / Home Decoration / Artificial
          </div>
          <div className="ms-auto me-lg-4">
            <div className="border rounded p-1 m-1 sorting">
              <span className="text-muted">Sort by</span>
              <select name="sort" className="sort" onChange={handleSort}>
                <option value="Low">Low to High</option>
                <option value="High">High to Low</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          {products.length > 0 ? (
            renderProducts()
          ) : (
            <div className="text-muted">No products found</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Categories;
