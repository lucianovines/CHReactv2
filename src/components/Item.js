import { Link } from "react-router-dom"
import cartContext from "../context/cartContext"
import { useContext } from "react"

export default function Item(props){

    const cartInContext = useContext(cartContext);    

    return(
       
 

            <div class="col-md-4 d-flex justify-content-center">
            <div class="card p-2">
                <div class="text-center"> 
                    <img src={props.imgUrl} class="img-fluid" width="350" /> 
                </div>
                <div class="content">
                    <div class="d-flex justify-content-between align-items-center"> 
                        <span class="category">{props.Name}</span> 
                        <span class="price">${props.Price}</span> 
                    </div>
                    <p>{props.Category}</p>
                    <div class="buttons d-flex justify-content-center"> 
                        <Link to={`/item/${props.id}`}><button class="btn btn-outline-primary mr-1 itemDetail"> Detalle </button> </Link>    
                        <button class="btn btn-primary itemAdd" onClick={()=> cartInContext.addItem(props, 1)}>Agregar</button> 
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}