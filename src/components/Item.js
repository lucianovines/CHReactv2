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
                    <p className="card-text-price">${props.Price}</p>
                    <div className="row itemButtons">
                        <div className="col-6 buttonDetail">
                            <button>Hola</button>
                        </div>
                        <div className="col-6 buttonAdd">
                            <button>Hola</button>
                        </div>
                    </div>
                    <Link to={`/item/${props.id}`}> Detalle </Link>        
                </div>
            </div>
        </Col>
        
    )
}