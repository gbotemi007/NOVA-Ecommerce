import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // ADD TO CART
  function addToCart(product) {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  }

  // INCREASE QUANTITY
  function increaseQuantity(id) {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  }

  // DECREASE QUANTITY
  function decreaseQuantity(id) {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
    );
  }

  // REMOVE FROM CART
  function removeFromCart(id) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  }

  // TOGGLE WISHLIST
  function toggleWishlist(product) {
    setWishlist((currentWishlist) => {
      const alreadySaved = currentWishlist.some(
        (item) => item.id === product.id
      );

      if (alreadySaved) {
        return currentWishlist.filter(
          (item) => item.id !== product.id
        );
      }

      return [...currentWishlist, product];
    });
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        wishlist,
        toggleWishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

