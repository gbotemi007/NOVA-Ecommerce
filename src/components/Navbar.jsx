import { Link, useLocation } from "react-router-dom";
import {
  Search,
  Heart,
  ShoppingBag,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { useCart } from "../Context/CartContext.jsx";

function Navbar() {
  const { cart, wishlist } = useCart();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="navbar">

      <Link to="/" className="navbar-logo" onClick={closeMenu}>
        NOVA
      </Link>

      <nav className={`nav-links ${menuOpen ? "show-menu" : ""}`}>

        <Link to="/" onClick={closeMenu}>
          Home
        </Link>

        <Link to="/shop" onClick={closeMenu}>
          Shop
        </Link>

        <Link to="/categories" onClick={closeMenu}>
          Categories
        </Link>

        <Link to="/about" onClick={closeMenu}>
          About
        </Link>

      </nav>

      <div className="nav-actions">

        <Link
          to="/search"
          className="nav-icon"
          aria-label="Search"
        >
          <Search size={20} />
        </Link>

        <Link
          to="/wishlist"
          className="nav-icon"
          aria-label="Wishlist"
        >
          <Heart size={20} />

          {wishlist.length > 0 && (
            <span className="nav-count">
              {wishlist.length}
            </span>
          )}
        </Link>

        <Link
          to="/cart"
          className="nav-icon cart-icon"
          aria-label="Cart"
        >
          <ShoppingBag size={20} />

          <span className="nav-count cart-count">
            {cartCount}
          </span>
        </Link>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

      </div>

    </header>
  );
}

export default Navbar;
