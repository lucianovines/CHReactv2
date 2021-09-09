import { Link } from "react-router-dom"
import { Col } from "react-bootstrap"




export default function Item(props){

    return(
        <Col>
            <div className="card border-dark">
                <img src={props.imgUrl} className="card-img-top" alt="imgprod"/>
                <div className="card-body">
                    <h5 className="card-title">{props.Name}</h5>
                    <p className="card-text">{props.Description}.</p>
                    <p className="card-text">${props.Price}</p>
                    <Link to={`/item/${props.id}`}> Detalle </Link>        
                </div>
            </div>
        </Col>
        
    )
}