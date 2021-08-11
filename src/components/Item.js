import ItemCount from "./ItemCount"
export default function Item(props){

    return(
        <div className="col">
        <div className="card border-dark">
            <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}.</p>
            <p className="card-text">${props.price}</p>
            <ItemCount initial={3} stock={5}/>
            </div>
        </div>
        </div>
        
    )
}