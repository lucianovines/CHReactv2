import { useEffect, useState, useContext } from "react";
import cartContext from "../context/cartContext";


export default function ItemCount(props){
    const [count, setCount] = useState(1);



    const cartInContext = useContext(cartContext);
    

    useEffect(() =>{

    }, []);

    const onAdd = (producto, toAdd) =>{
        cartInContext.addItem(producto, toAdd);
    }

    const sumar = ()=>{
        const newValue = count +1;
        if(newValue<=props.Stock){
            setCount(newValue);
        }
      }

      const restar = ()=>{
        const newValue = count -1;
        if(newValue>=1){
            setCount(newValue);
        }
      }


    return(
        <>
       

        <div class="section" style={{paddingBottom:'20px'}}>
            <h6 class="title-attr"><small>CANTIDAD</small></h6>                    
            <div className="productStock col-12">
                <button className="col-4"  onClick ={restar}>-</button>
                <button className="col-4">{count}</button>
                <button className="col-4" onClick ={sumar}>+</button>
            </div>            
        </div>  

        <div class="section" style={{paddingBottom:'20px'}}>
            <button onClick={()=>onAdd(props, count)} class="btn btn-success"> 
                Agregar al carro
            </button>
        </div>  
        </>
    )
}

