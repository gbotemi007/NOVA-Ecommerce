import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useCart } from "../Context/CartContext";

function ProductCard({ product }) {

  const {
    addToCart,
    wishlist,
    toggleWishlist,
  } = useCart();
  //const { cart, addToCart } = useCart()


  return (
    <div className="product-card">

      <div className="product-image">

        <Link to={`/product/${product.id}`}>

          <img
            src={product.image}
            alt={product.name}
          />

        </Link>

        <button
          className="wishlist-button"
          onClick={() => toggleWishlist(product)}
        >
          <Heart
            size={19}
            strokeWidth={1.8}
            fill={
              wishlist.some((item) => item.id === product.id)
                ? "currentColor"
                : "none"
            }
          />
        </button>

      </div>


      <div className="product-info">

        <div className="rating">
          ★ {product.rating}

          <span>
            ({product.reviews})
          </span>
        </div>

        <h3>
          {product.name}
        </h3>

        <p className="product-price">
          ₦{product.price.toLocaleString()}
        </p>

        <button
          className="add-button"
          onClick={() => {
            console.log("clicked:", product)
            addToCart(product)}}
        >
          Add to cart
        </button>

      </div>

    </div>
  );
}

export default ProductCard;
