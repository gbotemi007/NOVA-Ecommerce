
import { useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/products.jsx";

function Search() {
  const [search, setSearch] = useState("");

  const results = products.filter((product) =>
    product.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className="search-page">

      <div className="search-header">

        <p className="section-label">
          FIND SOMETHING YOU LOVE
        </p>

        <h1>Search</h1>

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          autoFocus
        />

      </div>

      {search && (
        <div className="search-results">

          {results.length === 0 ? (

            <p>No products found.</p>

          ) : (

            results.map((product) => (

              <Link
                to={`/product/${product.id}`}
                className="search-result"
                key={product.id}
              >

                <img
                  src={product.image}
                  alt={product.name}
                />

                <div>
                  <h3>{product.name}</h3>

                  <p>
                    ₦{product.price.toLocaleString()}
                  </p>
                </div>

              </Link>

            ))

          )}

        </div>
      )}

    </main>
  );
}

export default Search;