
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext.jsx";

function Checkout() {
  const { cart } = useCart();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <main className="checkout-page">

      <div className="checkout-header">
        <p>CHECKOUT</p>
        <h1>Complete Your Order</h1>
      </div>

      <section className="checkout-container">

        <form className="checkout-form">

          <h2>Contact Information</h2>

          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="tel"
            placeholder="Phone Number"
          />

          <h2>Delivery Information</h2>

          <input
            type="text"
            placeholder="Delivery Address"
          />

          <input
            type="text"
            placeholder="City"
          />

          <button type="button">
            Place Order
          </button>

        </form>


        <aside className="checkout-summary">

          <h2>Order Summary</h2>

          {cart.map((item) => (
            <div
              className="checkout-item"
              key={item.id}
            >

              <img
                src={item.image}
                alt={item.name}
              />

              <div>
                <h3>{item.name}</h3>
                <p>
                  {item.quantity} × ₦
                  {item.price.toLocaleString()}
                </p>
              </div>

            </div>
          ))}

          <div className="checkout-total">
            <span>Total</span>

            <strong>
              ₦{subtotal.toLocaleString()}
            </strong>
          </div>

        </aside>

      </section>

    </main>
  );
}

export default Checkout
