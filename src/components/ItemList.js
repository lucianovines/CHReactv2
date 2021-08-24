import { useEffect, useState } from "react";
import Item from "./Item";
import {ProductsJSON} from "../jsons/ProductsJson"

export default function ItemList(){
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        new Promise((resolve, reject) =>{
            
            setTimeout(() => resolve(ProductsJSON),2000);
        }).then((response) => {
            setProducts(response);
            console.log("response", response);
        }).catch((error) =>{
            alert("Hubo un error");
        });
    }, []);

    return(
        <>
       {products.map((product)=>(<Item {...product} />))} 
       </>
        
    )
}