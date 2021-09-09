import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import cartContext from "../context/cartContext";


export default function ItemCount(props){
    const [stock, setStock] = useState(props.Stock);
    //const [initial, setInitial] = useState(props.initial);
    const [count, setCount] = useState(0);
    const [btnBuy, setBtnBuy] = useState(0);


    const cartInContext = useContext(cartContext);
    

    useEffect(() =>{

    }, []);

    const onAdd = (producto, toAdd) =>{
        if (toAdd>0 ){
            setBtnBuy(1);
        }
        cartInContext.addItem(producto, toAdd);
    }

    const sumar = ()=>{
        const newValue = count +1;
        if(newValue<=stock){
            setCount(newValue);
        }
      }

      const restar = ()=>{
        const newValue = count -1;
        if(newValue>=0){
            setCount(newValue);
        }
      }


    return(
        <>
        <div className="productStock col-4">
            <button className="col-4"  onClick ={restar}>-</button>
            <button className="col-4">{count}</button>
            <button className="col-4" onClick ={sumar}>+</button>
        </div>
        <div className="">
            {count > 0 && <button onClick={() => onAdd(props, count)}>Agregar</button>}
            {btnBuy > 0 && <Link to="/cart">Finalizar Compra</Link>}

            <button onClick={() => cartInContext.clear()}>Limpiar</button>
            <button onClick={() => cartInContext.removeItem(props.id)}>Borrar Item</button>
           
        </div>
        </>
    )
}

