import { Link } from "react-router-dom";
import heroHeadphone from "../assets/heroHeadphone.jpeg";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <p className="hero-label">
          NEW COLLECTION
        </p>

        <h1>
          Upgrade Your
          <span>Everyday</span>
        </h1>

        <p className="hero-description">
          Discover premium tech and lifestyle products
          designed for modern living.
        </p>

        <div className="hero-buttons">

          <Link
            to= "/Shop"
            className="primary-button"
          >
            Shop Now
          </Link>

          <button className="secondary-button">
            Explore Categories →
          </button>

        </div>

      </div>

      <div className="hero-image">
        <img
          src={heroHeadphone}
          alt="Wireless headphones"
        />
      </div>

    </section>
  );
}

export default Hero;