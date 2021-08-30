import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

export default function ItemDetail(props){
    console.log("stock", props.stock);

    return(
        <div>
            <h1>Detalle del Item</h1>
            <h2>{props.title}</h2>
            <img src={props.imgUrl} />
            <h3>{props.description}</h3>
            <h3>${props.price}</h3>
            <div>
                <ItemCount {...props}/>
            </div>
            <Link to="/">Volver</Link>
        </div>
        
    )
}

