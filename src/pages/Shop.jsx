import { useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Shop() {

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All", 
    "Headphones",
    "Smartwatches",
    "Accessories",
    "Speakers",
    "Gadgets",
  ];

  const filteredProducts = products.filter((product) => {
        const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

        const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

  return (
    <main className="shop-page">

        <section className="shop-header">
            <p className="section-label">
            OUR STORE
            </p>

            <h1>Shop All Products</h1>

            <p>
            Discover our collection of premium tech
            and lifestyle products.
            </p>
        </section>


        <section className="shop-content">
            <div className="shop-controls">

                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(event) =>
                    setSearchTerm(event.target.value)
                    }
                />

                <div className="category-buttons">

                    {categories.map((category) => (

                    <button
                        key={category}
                        className={
                        selectedCategory === category
                            ? "active"
                            : ""
                        }
                        onClick={() =>
                        setSelectedCategory(category)
                        }
                    >
                        {category}
                    </button>

                    ))}

                </div>

            </div>


            <div className="products-grid">

                {filteredProducts.length > 0 ? (

                    filteredProducts.map((product) => (

                    <ProductCard
                        key={product.id}
                        product={product}
                    />

                    ))
 
                ) : (

                    <p className="no-products">
                    No products found.
                    </p>

                )}

            </div>

        </section>

    </main>
  );
}

export default Shop;