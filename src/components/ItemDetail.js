import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

export default function ItemDetail(props){
    console.log("stock", props.stock);

    return(
        <div>
            <h1>Detalle del Item</h1>
            <h2>{props.title}</h2>
            <h3>{props.description}</h3>
            <h3>${props.price}</h3>
            <img src={`../assets/img/products/${props.imgUrl}`} />
            <div>
                <ItemCount initial={0} stock={props.stock}/>
            </div>
            <Link to="/">Volver</Link>
        </div>
        
    )
}

