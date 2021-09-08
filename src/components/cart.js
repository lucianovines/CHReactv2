import { useContext, useEffect, useState } from "react";
import cartContext from "../context/cartContext";

export default function Cart(){
    const cartInContext = useContext(cartContext);
    const [products, setProducts] = useState(cartInContext.cart);
    const [total, setTotal] = useState(0);

    const getTotal = () =>{
        let i = 0;
        const cartTotal = products.map((product)=>
        i += (product.product.price * product.quantity)
        )
        setTotal(i)
        }

    useEffect(()=>{
        getTotal();
    },[1])
    

    console.log("products", products);
    console.log("CIC", cartInContext.cart)
    console.log("Total", total)

    function countStock(product){
        for(let i=0; i<=product.stock; i++){
        return(
            <>
            <option value={i}>{i}</option>
            </>
        )}
    }



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
                                <h4 class="product-title"><a href="#">{product.product.title}</a></h4><span><em>Categoria:</em> {product.product.categoryid}</span><span><em>Descripción:</em> {product.product.description}</span>
                            </div>
                        </div>
                    </td>
                    <td class="text-center">
                        <p class="form-control" >
                            {product.quantity}
                        </p>
                    </td>
                    <td class="text-center text-lg text-medium">${product.product.price}</td>
                    <td class="text-center text-lg text-medium">${product.product.price * product.quantity}</td>
                    <td class="text-center"><a class="remove-from-cart" href="#" data-toggle="tooltip" title="" data-original-title="Remove item"><i class="fa fa-trash"></i></a></td>
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
</>
    )


}

