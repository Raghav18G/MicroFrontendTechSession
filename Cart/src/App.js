import React from "react";

export const Cart = (props) => {
  // console.log(props)

  const style = {
    itemText: {
      cursor: "pointer",
      margin: "20px 0",
    },
  };

  return (
    <div>
      <h1>
        This is the <strong>Cart Page</strong>
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="https://i.pinimg.com/originals/df/70/fc/df70fc7f957c5811ff783ad0efdd4966.jpg"
          style={{ width: "250px", height: "250px", marginRight: "2rem" }}
        />
        {/* Counter */}
        <div>
          <h1> Total Items</h1>
          <h3>{props.cartCount}</h3>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button
              style={{ marginRight: "5px" }}
              onClick={(e) => props.setCartCount((prev) => prev + 1)}
            >
              {" "}
              + Add Item{" "}
            </button>
            <button onClick={(e) => props.setCartCount((prev) => prev - 1)}>
              {" "}
              - Remove Item{" "}
            </button>
          </div>
        </div>
      </div>

      <ul>
        {props.itemList.map((item) => {
          return (
            <li style={style.itemText} onClick={(e) => props.handleClick(e)}>
              {item}
            </li>
          );
        })}
        {/* <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li> */}
      </ul>
    </div>
  );
};

export default Cart;
