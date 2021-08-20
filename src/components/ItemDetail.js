import { useEffect, useState } from "react";
import Item from "./Item";

export default function ItemDetail(){
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        new Promise((resolve, reject) =>{
            const data =[
                {
                    id: 1,
                    title: "Producto 1",
                    description: "Prueba de Producto 1",
                    price: 200.00,
                    imgUrl: "producto1",
                    detail: "Este es el detalle del Producto 1"
                },
                {
                    id: 2,
                    title: "Producto 2",
                    description: "Esta es la descripcion del producto numero 2",
                    price: 150.99,
                    imgUrl: "producto1",
                    detail: "Este es el detalle del Producto 1"
                }
            ];
            setTimeout(() => resolve(data),2000);
        }).then((response) => {
            setProducts(response);
            console.log("response", response);
        }).catch((error) =>{
            alert("Hubo un error");
        });
    }, []);

    return(
        <>
       {products.map((product)=>(<Item title={product.title} description={product.description} price={product.price} imgUrl={product.imgUrl} detail={product.detail} />))}
        </>
        
    )
}

