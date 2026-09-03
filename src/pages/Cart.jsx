
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext.jsx";

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();


  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <main className="cart-page">

      <section className="cart-header">

        <p className="section-label">
          YOUR SHOPPING BAG
        </p>

        <h1>Your Cart</h1>

        <p>
          Review your selected products before checkout.
        </p>

      </section>


      {cart.length === 0 ? (

        <section className="empty-cart">

          <h2>Your cart is empty</h2>

          <p>
            You haven't added any products yet.
          </p>

          <Link
            to="/shop"
            className="continue-shopping"
          >
            Continue Shopping
          </Link>

        </section>

      ) : (

        <section className="cart-container">

          <div className="cart-items">

            {cart.map((item) => (

              <div
                className="cart-item"
                key={item.id}
              >

                <img
                  src={item.image}
                  alt={item.name}
                />


                <div className="cart-item-info">

                  <h3>{item.name}</h3>

                  <p className="cart-price">
                    ₦{item.price.toLocaleString()}
                  </p>


                  <div className="quantity-control">

                    <button
                      type="button"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      type="button"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>

                  </div>


                  <button
                    className="remove-button"
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                  >
                    Remove
                  </button>

                </div>

              </div>

            ))}

          </div>


          <aside className="cart-summary">

            <h2>Order Summary</h2>

            <div className="summary-row">

              <span>Subtotal</span>

              <span>
                ₦{subtotal.toLocaleString()}
              </span>

            </div>


            <div className="summary-row">

              <span>Shipping</span>

              <span>Free</span>

            </div>


            <div className="summary-total">

              <span>Total</span>

              <span>
                ₦{subtotal.toLocaleString()}
              </span>

            </div>


            <Link 
            to="/checkout"
            className="checkout-button"
            >
              Proceed to checkout
            </Link>


            <Link
              to="/shop"
              className="continue-shopping"
            >
              Continue Shopping
            </Link>

          </aside>

        </section>

      )}

    </main>
  );
}

export default Cart;
