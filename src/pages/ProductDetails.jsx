import { Link, useParams } from "react-router-dom";
import { Heart, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useCart } from "../Context/CartContext.jsx";
import products from "../data/products.jsx";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const {
    addToCart,
    wishlist,
    toggleWishlist,
  } = useCart();

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <main className="product-not-found">
        <h1>Product not found</h1>

        <Link to="/shop">
          Back to Shop
        </Link>
      </main>
    );
  }

  const isWishlisted = wishlist.some(
    (item) => item.id === product.id
  );

  function handleAddToCart() {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  }

  return (
    <main className="product-details">

      <Link to="/shop" className="back-link">
        <ArrowLeft size={18} />
        Back to Shop
      </Link>

      <section className="product-details-container">

        <div className="product-details-image">
          <img
            src={product.image}
            alt={product.name}
          />
        </div>

        <div className="product-details-info">

          <div className="rating">
            ★ {product.rating}
            <span> ({product.reviews})</span>
          </div>

          <h1>{product.name}</h1>

          <p className="details-price">
            ₦{product.price.toLocaleString()}
          </p>

          <p className="details-description">
            {product.description}
          </p>

          <div className="details-actions">

            <div className="quantity-control">

              <button
                type="button"
                onClick={() =>
                  setQuantity((q) => Math.max(1, q - 1))
                }
              >
                −
              </button>

              <span>{quantity}</span>

              <button
                type="button"
                onClick={() =>
                  setQuantity((q) => q + 1)
                }
              >
                +
              </button>

            </div>

            <button
              className="details-add-button"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>

            <button
              className="details-wishlist-button"
              onClick={() => toggleWishlist(product)}
            >
              <Heart
                size={20}
                fill={isWishlisted ? "currentColor" : "none"}
              />
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}

export default ProductDetails;