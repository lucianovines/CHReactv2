import { useContext, useEffect, useState } from "react";
import cartContext from "../context/cartContext";
import { Link } from "react-router-dom";
import { FiTrash } from "react-icons/fi";
import { db } from "../firebase";
import { collection,doc, setDoc, Timestamp, addDoc } from "firebase/firestore";

export default function Cart(){
    const cartInContext = useContext(cartContext);
    const [total, setTotal] = useState(0);
    const [showUserData, setShowUserData] = useState(false);

    const getTotal = () =>{
        let i = 0;
        const cartTotal = cartInContext.cart.map((product)=>
        i += (product.product.Price * product.quantity)
        )
        setTotal(i)
        }

    const [userData, setUserData] = useState({
        name: "",
        phone: "",
        email: ""
    });


    useEffect(()=>{
        getTotal();
    })

    const userDataIndicator = ()=> {
    setShowUserData(true);
    console.log("Fecha y hora", Timestamp.fromDate(new Date()))
    }

    const handleInputChange = (event)=>{
        setUserData({
            ...userData,
            [event.target.name] : event.target.value
        })
        console.log("userData", userData);
    }

    const sendData = async (event)=>{
        event.preventDefault();
        console.log("datos enviados" , userData)
        const orderCollection = collection(db, "Orders");
        const order ={
            buyer: userData,
            items: cartInContext.cart,
            date: Timestamp.fromDate(new Date()),
            total: total
        };

        const orderReference = await addDoc(collection(db, "Orders"), order)
        console.log("ID de Compra: ", orderReference.id);

    }


    return( 
        
<>
        {cartInContext.cart.length >0 && 
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
            {cartInContext.cart.map((product) =>
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
            <a class="btn btn-success" onClick={()=>userDataIndicator()}>Finalizar Compra</a>
        </div>
    </div>
    {showUserData===true && 
    <div className="userData">
        <h1>Formulario</h1>
            <form className="row" onSubmit={sendData} >
                <div className="col-md-3">
                    <input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="name"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="Telefono" className="form-control" onChange={handleInputChange} name="phone"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="Email" className="form-control" onChange={handleInputChange} name="email"></input>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
    </div>
    }            
    
</div>

}

    {cartInContext.cart.length ===0 &&
    <>
    <h1>No hay items en el carrito</h1>
    <Link to="/">Volver a comprar</Link>
    </>
    }
</>
    )


}

