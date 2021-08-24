import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react";
import {ProductsJSON} from "../jsons/ProductsJson"
import { useParams } from "react-router";

export default function ItemDetailContainer(){

    const [products, setProducts] = useState([]);

    const {id} = useParams();

    useEffect(()=>{
        new Promise((resolve, reject) =>{
            setTimeout(() => resolve(ProductsJSON.filter((item)=> item.id === id)),2000);
        }).then((response) => {
            setProducts(response[0]);
            console.log("response IDC", response);
        }).catch((error) =>{
            alert("Hubo un error");
        });
    }, []);

    return(
        <>
          
          <div >
              <ItemDetail {...products} />
          </div>
        </>
    )
}