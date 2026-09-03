import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

import {
  Truck,
  ShieldCheck,
  BadgeCheck,
  RotateCcw,
} from "lucide-react";

function Home() {

  const featuredProducts = products.slice(0, 6);

  return (
    <main>

      <Hero />

      {/* FEATURES */}

        <section className="features">

          <div>
            <span>
              <Truck size={22} strokeWidth={1.8} />
            </span>

            <h3>Fast Delivery</h3>
            <p>Get your orders quickly</p>
          </div>


          <div>
            <span>
              <ShieldCheck size={22} strokeWidth={1.8} />
            </span>

            <h3>Secure Payment</h3>
            <p>100% secure checkout</p>
          </div>


          <div>
            <span>
              <BadgeCheck size={22} strokeWidth={1.8} />
            </span>

            <h3>Quality Products</h3>
            <p>Premium & tested</p>
          </div>


          <div>
            <span>
              <RotateCcw size={22} strokeWidth={1.8} />
            </span>

            <h3>Easy Returns</h3>
            <p>30-day return policy</p>
          </div>

        </section>


      {/* FEATURED PRODUCTS */}

      <section className="products-section">

        <div className="section-heading">

          <div>
            <p className="section-label">
              OUR PICKS
            </p>

            <h2>
              Featured Products
            </h2>
          </div>

          <a href="/shop">
            View All →
          </a>

        </div>


        <div className="products-grid">

          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </section>


      {/* CATEGORIES */}

      <section className="categories-section">

        <div className="section-heading">

          <div>
            <p className="section-label">
              EXPLORE
            </p>

            <h2>
              Shop by Category
            </h2>
          </div>

        </div>


        <div className="categories-grid">

          <div className="category-card">
            <h3>Headphones</h3>
            <p>12 Products</p>
          </div>

          <div className="category-card">
            <h3>Smartwatches</h3>
            <p>8 Products</p>
          </div>

          <div className="category-card">
            <h3>Accessories</h3>
            <p>15 Products</p>
          </div>

          <div className="category-card">
            <h3>Speakers</h3>
            <p>10 Products</p>
          </div>

          <div className="category-card">
            <h3>Gadgets</h3>
            <p>9 Products</p>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;