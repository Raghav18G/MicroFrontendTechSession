import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const CartView = React.lazy(() => import("cart/cartIndex"));

export const Cart = () => {
  let navigate = useNavigate();
  let items = ["Item 1", "Item 2", "Item 3", "Item 4"];

  const [cartCount, setCartCount] = useState(0);

  const clickItem = (e) => {
    const item = e.target.innerText;
    console.log(item);
    alert(`${item} clicked`);
  };

  return (
    <>
      <React.Suspense fallback={"Loading..."}>
        <CartView
          itemList={items}
          handleClick={clickItem}
          cartCount={cartCount}
          setCartCount={setCartCount}
        />
        <hr />
        <button onClick={() => navigate(-1)}>Go Back</button>
      </React.Suspense>
    </>
  );
};

export default Cart;
