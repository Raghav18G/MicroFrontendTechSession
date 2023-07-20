import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProduct, getProductsList } from "./Redux/actionCreator";
import { useSelector } from "react-redux";
const ProductView = React.lazy(() => import("product/productIndex"));

export const Products = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  //Fetching From Redux
  const { Products_Data } = useSelector((state) => state.products);
  const products = Products_Data?.Products_Data_Info;
  console.log("STATE", products);

  //Fetching Products List
  useEffect(() => {
    dispatch(getProductsList());
  }, []);

  return (
    <>
      <React.Suspense fallback={"Loading..."}>
        <ProductView
          products={products}
          dispatch={dispatch}
          deleteProduct={deleteProduct}
        />
        <hr />
        <button onClick={() => navigate(-1)}>Go Back</button>
      </React.Suspense>
    </>
  );
};

export default Products;
