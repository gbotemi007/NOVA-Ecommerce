import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/productDetails";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Search from "./pages/Search";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/shop"
            element={<Shop />}
         />
          <Route
            path="/product/:id"
            element={<ProductDetails />}
         />
          <Route
            path="/cart"
            element={<Cart />}
         />
          <Route
            path="/checkout"
            element={<Checkout />}
         />
          <Route
            path="/categories"
            element={<Categories />}
         />
          <Route
            path="/about"
            element={<About />}
         />
          <Route
            path="/search"
            element={<Search />}
         />
          <Route
            path="/wishlist"
            element={<Wishlist />}
         />

        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;