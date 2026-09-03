import { Link } from "react-router-dom";

function Categories() {
  const categories = [
    "Speakers",
    "Headphones",
    "Smartwatches",
    "Accessories",
  ];

  return (
    <main className="simple-page">

      <p className="section-label">
        EXPLORE
      </p>

      <h1>Categories</h1>

      <p>
        Browse our collection by category.
      </p>

      <div className="category-grid">

        {categories.map((category) => (
          <Link
            to="/shop"
            className="category-box"
            key={category}
          >
            {category}
          </Link>
        ))}

      </div>

    </main>
  );
}

export default Categories;