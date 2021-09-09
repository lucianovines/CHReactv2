import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

export default function ItemDetail(props){
    console.log("stock", props.stock);

    return(
        <>
        <div>
            <h1>Detalle del Item</h1>
            <h2>{props.Name}</h2>
            <img src={props.imgUrl} />
            <h3>{props.Description}</h3>
            <h3>${props.Price}</h3>
            <div>
                <ItemCount {...props}/>
            </div>
            <Link to="/">Volver</Link>
        </div>


      

</>



        
    )
}

