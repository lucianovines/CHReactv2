import { useEffect, useState, useContext } from "react";
import Item from "./Item";
import productsContext from "../context/productsContext";



export default function ItemList(category){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const productsInContext = useContext(productsContext);
    const productList= productsInContext.products

    

    // const getCategory = () => {
    //     if(category.category === undefined){
    //         setProducts(productList)
    //     }else{
    //         const productsFiltered = productList.filter((product)=> product.Category === category.category)
    //         setProducts(productsFiltered)
    //     }
    // }
        
    useEffect(()=>{
        const getCategories = async (categoria) =>{
            setLoading(true);
            if(categoria.category === undefined){
                setProducts(productList);
            }else{
                const productsFiltered = productList.filter((product)=> product.Category === category.category)
                setProducts(productsFiltered);
            }
            setLoading(false);
        };


        getCategories(category);
    //    getCategory()
    },[category.category, productList]);




    return(
        <>
        {loading && (<h1>Loading!</h1>)}
        {!loading && (
            <>
       {products.map((product)=>(<Item {...product} key={product.id} />))} 
       </>
       )}
       </>
        
    )
}