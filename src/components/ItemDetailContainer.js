import ItemDetail from "./ItemDetail"
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import productsContext from "../context/productsContext";



export default function ItemDetailContainer(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasProducts, setHasProducts] = useState(false)
    const productsInContext = useContext(productsContext);

    const {id} = useParams();


    useEffect(()=>{
        new Promise((resolve, reject) =>{
            resolve(productsInContext.products.filter((item)=> item.id === id));
            setLoading(true);
        }).then((response) => {
            if(response[0]!==undefined){
                setProducts(response[0]);
                console.log("response IDC", response);
            }else{
                setHasProducts(true)
            }
            
        }).catch((error) =>{
            alert("Hubo un error");
        }).finally(() => {
            setLoading(false);
        })
    }, []);

    return loading ? ( 
        <h1>Loading....</h1>
    ) : hasProducts ? (
            <>
            <h1>NO SE ENCONTRO EL PRODUCTO</h1>
            </>
        )  :(
        <>
          
          <div >
              <ItemDetail {...products} />
          </div>
        </>
    )
}