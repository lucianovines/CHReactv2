import { useContext, useEffect, useState } from "react";
import cartContext from "../context/cartContext";
import { Link } from "react-router-dom";
import { FiTrash } from "react-icons/fi";

export default function Cart(){
    const cartInContext = useContext(cartContext);
    const [products, setProducts] = useState(cartInContext.cart);
    const [total, setTotal] = useState(0);

    const getTotal = () =>{
        let i = 0;
        const cartTotal = products.map((product)=>
        i += (product.product.Price * product.quantity)
        )
        setTotal(i)
        }

    useEffect(()=>{
        getTotal();
    },[1])
    

    console.log("products", products);
    console.log("CIC", cartInContext.cart)
    console.log("Total", total)


    return( 
        
<>
        {products.length >0 && 
<div class="container padding-bottom-3x mb-1">
    <div class="table-responsive shopping-cart">
        <table class="table">
            <thead>
                <tr>
                    <th>Producto</th>
                    <th class="text-center">Cantidad</th>
                    <th class="text-center">Subtotal</th>
                    <th class="text-center">Total</th>
                    <th class="text-center"><a class="btn btn-sm btn-outline-danger" onClick={()=>cartInContext.clear()}>Vaciar Carrito</a></th>
                </tr>
            </thead>
            <tbody>
            {products.map((product) =>
                <tr>
                    <td>
                        <div class="product-item">
                            <a class="product-thumb" href="#"><img src={product.product.imgUrl} alt="Product"></img></a>
                            <div class="product-info">
                                <h4 class="product-title"><a href="#">{product.product.Name}</a></h4><span><em>Categoria:</em> {product.product.Category}</span><span><em>Descripción:</em> {product.product.Description}</span>
                            </div>
                        </div>
                    </td>
                    <td class="text-center">
                        <p class="form-control" >
                            {product.quantity}
                        </p>
                    </td>
                    <td class="text-center text-lg text-medium">
                        <button onClick={()=>console.log("sumar") }>+</button>
                        ${product.product.Price}
                        <button>-</button>
                    </td>
                    <td class="text-center text-lg text-medium">${(product.product.Price * product.quantity)}</td>
                    <td class="text-center"><a class="remove-from-cart" href="#" data-toggle="tooltip" title="" data-original-title="Remove item"><FiTrash onClick={()=> cartInContext.removeItem(product.product.id)}/></a></td>
                </tr>
            )}
            </tbody>
        </table>
    </div>
    <div class="shopping-cart-footer">
        <div class="column text-lg">Total: <span class="text-medium">${total}</span></div>
    </div>
    <div class="shopping-cart-footer">
        <div class="column"><a class="btn btn-outline-secondary" href="#"><i class="icon-arrow-left"></i>&nbsp;Seguir Comprando</a></div>
        <div class="column">
            <a class="btn btn-success" href="#">Finalizar Compra</a>
        </div>
    </div>
</div>

}

    {products.length ===0 &&
    <>
    <h1>No hay items en el carrito</h1>
    <Link to="/">Volver a comprar</Link>
    </>
    }
</>
    )


}

