import { Link } from "react-router-dom";

export default function ItemDetail(props){
    console.log("Estoy aca");

    return(
        <div>
            <h1>Detalle del Item</h1>
            <h2>{props.title}</h2>
            <h3>{props.description}</h3>
            <h3>${props.price}</h3>
            <img src={`../assets/img/products/${props.imgUrl}`} />
            <Link to="/">Volver</Link>
        </div>
        
    )
}

