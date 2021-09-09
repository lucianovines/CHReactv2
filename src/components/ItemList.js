import { useEffect, useState, useContext } from "react";
import Item from "./Item";
import productsContext from "../context/productsContext";



export default function ItemList(){
    const [products, setProducts] = useState([]);

    const productsInContext = useContext(productsContext);

    console.log("products in context", productsInContext.products);
    
    useEffect(()=>{
        
        setProducts(productsInContext)
    }, []);

    return(
        <>
       {productsInContext.products.map((product)=>(<Item {...product} />))} 
       </>
        
    )
}