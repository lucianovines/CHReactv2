import { useContext, useEffect, useState } from "react";
import cartContext from "../context/cartContext";
import { Link } from "react-router-dom";
import { FiTrash } from "react-icons/fi";
import { db } from "../firebase";
import { collection, Timestamp, addDoc } from "firebase/firestore";

export default function Cart(){
    const cartInContext = useContext(cartContext);
    const [total, setTotal] = useState(0);
    const [showUserData, setShowUserData] = useState(false);
    const [checkMails, setCheckMails] = useState(false)
    const [nroCompra, setNroCompra] = useState();

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

    const checkComparation = (event) =>{
        console.log("valor mail", userData.email)
        if(event.target.value === userData.email){
            console.log("soy igual", userData.email)
            setCheckMails(true)
        }else{
            setCheckMails(false)
        }
    }

    const sendData = async (event)=>{
        event.preventDefault();
        console.log("datos enviados" , userData)
        const order ={
            buyer: userData,
            items: cartInContext.cart,
            date: Timestamp.fromDate(new Date()),
            total: total
        };

        const orderReference = await addDoc(collection(db, "Orders"), order)
        console.log("ID de Compra: ", orderReference.id);
        setNroCompra(orderReference.id);

        return(
            <>
            <h1>Fin de compra</h1>
            </>
        )

    }


    return( 
        
<>
        {cartInContext.cart.length >0 && 
<div className="container padding-bottom-3x mb-1">
    <div className="table-responsive shopping-cart">
        <table className="table">
            <thead>
                <tr>
                    <th>Producto</th>
                    <th className="text-center">Cantidad</th>
                    <th className="text-center">Subtotal</th>
                    <th className="text-center">Total</th>
                    <th className="text-center"><button className="btn btn-sm btn-outline-danger" onClick={()=>cartInContext.clear()}>Vaciar Carrito</button></th>
                </tr>
            </thead>
            <tbody>
            {cartInContext.cart.map((product) =>
                <tr>
                    <td>
                        <div className="product-item">
                            <span className="product-thumb" href="#"><img src={product.product.imgUrl} alt="Product"></img></span>
                            <div className="product-info">
                                <h4 className="product-title"><span>{product.product.Name}</span></h4><span><em>Categoria:</em> {product.product.Category}</span>
                            </div>
                        </div>
                    </td>
                    <td className="text-center text-lg text-medium">
                            {product.quantity}
                    </td>
                    <td className="text-center text-lg text-medium">
                        ${product.product.Price} 
                    </td>
                    <td className="text-center text-lg text-medium">${(product.product.Price * product.quantity)}</td>
                    <td className="text-center"><button class="remove-from-cart" data-toggle="tooltip" title="" data-original-title="Remove item"><FiTrash onClick={()=> cartInContext.removeItem(product.product.id)}/></button></td>
                </tr>
            )}
            </tbody>
        </table>
    </div>
    <div className="shopping-cart-footer">
        <div className="column text-lg">Total: <span class="text-medium">${total}</span></div>
    </div>
    <div className="shopping-cart-footer">
        <div className="column"><button class="btn btn-outline-secondary" href="#"><i class="icon-arrow-left"></i>&nbsp;Seguir Comprando</button></div>
        <div className="column">
            <button class="btn btn-success" onClick={()=>userDataIndicator()}>Finalizar Compra</button>
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
                    <input type="number" placeholder="Telefono" className="form-control" onChange={handleInputChange} name="phone"></input>
                </div>
                <div className="col-md-3">
                    <input type="email" placeholder="Email" className="form-control" onChange={handleInputChange} name="email"></input>
                </div>
                <div className="col-md-3">
                    <input type="email" placeholder="Repetir Email" className={`form-control ${checkMails ? "" : "redBorder" }`} onChange={checkComparation} name="repemail"></input>
                </div>
                <button type="submit" className={`btnSend btn btn-primary ${checkMails ? "" : "disabled" }`}>Enviar</button>
            </form>
            {nroCompra !== undefined &&
            <p>Nro de compra: {nroCompra} </p>
            }
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

