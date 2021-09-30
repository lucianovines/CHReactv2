import { useEffect, useState, useContext } from "react";
import Item from "./Item";
import productsContext from "../context/productsContext";



export default function ItemList(category){
    const [products, setProducts] = useState([]);
    const productsInContext = useContext(productsContext);
    const productList= productsInContext.products

    console.log("Itemes en List", productList)

    const getCategory = () => {
        if(category.category === undefined){
            setProducts(productList)
        }else{
            const productsFiltered = productList.filter((product)=> product.Category === category.category)
            setProducts(productsFiltered)
        }
    }
        
    useEffect(()=>{
       getCategory()
    },[category.category, productList]);



    return(
        <>
       {products.map((product)=>(<Item {...product} key={product.id} />))} 
       </>
        
    )
}