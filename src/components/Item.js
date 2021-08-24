import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"




export default function Item(props){

    return(
        <div className="col">
        <div className="card border-dark">
            <img src={props.imgUrl} className="card-img-top" />
            <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}.</p>
            <p className="card-text">${props.price}</p>
            <Link to={`/item/${props.id}`}> Detalle </Link>
            <ItemCount initial={0} stock={props.stock}/>
            </div>
        </div>
        </div>
        
    )
}