const Product = ({ product }) => {
  return (
    <div className="card-parent">
      <section className="card">
        <a href={`/product/${product.itemId}`}>
          <img src={product.image} alt="" className="img-size" />
        </a>
        <div className="card-body">
          <a href={`/product/${product.itemId}`}>
            <div className="card-title">
              <strong>{product.name}</strong>
            </div>
          </a>
          <div className="card-text">${product.price}</div>
        </div>
      </section>
    </div>
  );
};

export default Product;
