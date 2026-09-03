
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext.jsx";

function Wishlist() {
  const { wishlist, toggleWishlist } = useCart();

  return (
    <main className="wishlist-page">

      <div className="wishlist-header">
        <p className="section-label">
          SAVED ITEMS
        </p>

        <h1>Your Wishlist</h1>
      </div>

      {wishlist.length === 0 ? (

        <div className="empty-wishlist">
          <h2>Your wishlist is empty</h2>

          <p>
            Save products you love and find them here.
          </p>

          <Link to="/shop">
            Browse Products
          </Link>
        </div>

      ) : (

        <div className="wishlist-grid">

          {wishlist.map((product) => (

            <div
              className="wishlist-card"
              key={product.id}
            >

              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                />
              </Link>

              <h3>{product.name}</h3>

              <p>
                ₦{product.price.toLocaleString()}
              </p>

              <button
                className="remove-button-Wish"
                onClick={() => toggleWishlist(product)}
              >
                Remove
              </button>

            </div>

          ))}

        </div>

      )}

    </main>
  );
}

export default Wishlist;