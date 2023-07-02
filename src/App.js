import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Pages from "./pages/Pages";
import Data from "./components/flash/Data";
import Cart from "./components/cart/Cart";
import Footer from "./components/footer/Footer";

const App = () => {
  const { productItems } = Data;
  const [cartItem, setCartItem] = useState([]);

  const addToCard = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);

    if (productExit) {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }]);
    }
  };

  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);
    if (productExit.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...product, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };

  const removeItem = (id) => {
    setCartItem(cartItem.filter((item) => item.id !== id));
  };

  return (
    <>
      <Router basename={"/Bonik"}>
        <Header cartItem={cartItem} />
        <Routes>
          <Route
            path="/Bonik"
            exact
            element={
              <Pages productItems={productItems} addToCard={addToCard} />
            }
          />
          <Route
            path="/"
            exact
            element={
              <Pages productItems={productItems} addToCard={addToCard} />
            }
          />
          <Route
            path="/cart"
            exact
            element={
              <Cart
                cartItem={cartItem}
                addToCard={addToCard}
                decreaseQty={decreaseQty}
                removeItem={removeItem}
              />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
