import ItemDetail from "./ItemDetail"
import { useEffect, useState, useContext } from "react";
import {ProductsJSON} from "../jsons/ProductsJson"
import { useParams } from "react-router";
import productsContext from "../context/productsContext";


export default function ItemDetailContainer(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const productsInContext = useContext(productsContext);

    const {id} = useParams();

    useEffect(()=>{
        new Promise((resolve, reject) =>{
            resolve(productsInContext.products.filter((item)=> item.id === id));
            setLoading(true);
        }).then((response) => {
            setProducts(response[0]);
            console.log("response IDC", response);
        }).catch((error) =>{
            alert("Hubo un error");
        }).finally(() => {
            setLoading(false);
        })
    }, []);

    return loading ? ( 
        <h1>Loading....</h1>
    ) : (
        <>
          
          <div >
              <ItemDetail {...products} />
          </div>
        </>
    )
}