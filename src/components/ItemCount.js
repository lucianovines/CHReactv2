import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function ItemCount(props){
    const [stock, setStock] = useState(props.stock);
    //const [initial, setInitial] = useState(props.initial);
    const [count, setCount] = useState(0);
    const [btnBuy, setBtnBuy] = useState(0);
    

    useEffect(() =>{

    }, []);

    const onAdd = (producto, toAdd) =>{
        console.log("Producto agregado: ", producto);
        console.log("Cantidad agregada: ", toAdd);
        if (toAdd>0 ){
            setBtnBuy(1);
        }
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
        </div>
        </>
    )
}

