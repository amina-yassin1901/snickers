import { useState } from "react";
import ProductsContext from "../../context";
import axios from "axios";

const BASE_URL = "https://69c39e3db780a9ba03e759c4.mockapi.io";

function ProductProvider({ children }) {
    const [cartData, setCartData] = useState();
    const [products, setProducts] = useState();
    // api /productsDAta
    conts fetchProducts = async () => { };
    // api /cartData
    const addToCart = async () => { };
    const deleteFromCart = async () => { };
    const fetchCartData = async () => { };

    return <ProductsContext.Provider value={{}}>{children }</ProductsContext.Provider>
 }
export default ProductProvider;