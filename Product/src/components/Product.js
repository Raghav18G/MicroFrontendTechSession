import React from "react";
import { deleteProduct } from "../../../Host/src/views/Redux/actionCreator";

export const Products = (props) => {
  console.log("IN Products App", props?.products);

  const handleDelete = (id) => {
    console.log("In delete", id);
    props.dispatch(props.deleteProduct(id));
  };

  return (
    <div>
      <h1>
        This is the <strong>Product Page</strong>
      </h1>

      <ul>
        {props?.products?.map((obj) => (
          <>
            <li key={obj.id}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  // alignItems: "center",
                  flexDirection: "column",
                }}
              >
                {/* Titlte of the Product */}
                <h3>{obj?.title}</h3>
                {/* Description */}
                <p>{obj?.description}</p>
                {/* Image */}
                <img
                  src={obj?.image}
                  style={{ height: "300px", width: "350px" }}
                />
                <button
                  style={{ padding: "2px", margint: "2px" }}
                  onClick={(e) => handleDelete(obj.id)}
                >
                  {" "}
                  Delete Product{" "}
                </button>
              </div>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Products;
