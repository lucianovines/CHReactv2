import { useEffect, useState } from "react";

export default function ItemCount(props){
    const [stock, setStock] = useState(props.stock);
    //const [initial, setInitial] = useState(props.initial);
    const [OnAdd, setOnAdd] = useState(props.initial);

    useEffect(() =>{
        
    }, []);

    const sumar = ()=>{
        const newValue = OnAdd +1;
        if(newValue<=stock){
            setOnAdd(newValue);
        }
      }

      const restar = ()=>{
        const newValue = OnAdd -1;
        if(newValue>=0){
            setOnAdd(newValue);
        }
      }
      console.log("Btn Stock", props.stock)
      console.log("Btn invitial", OnAdd)
    return(
        <>
        <div className="productStock col-4">
            <button className="col-4"  onClick ={restar}>-</button>
            <button className="col-4">{OnAdd}</button>
            <button className="col-4" onClick ={sumar}>+</button>
        </div>
        <div className="">
            {OnAdd > 0 && <button>Finalizar Compra</button>}
        </div>
        </>
    )
}

