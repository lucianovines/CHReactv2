import ItemCount from "./ItemCount";

export default function ItemDetail(props){



    return(
        <>
        <div className="container itemDetailContainer">
        	<div className="row justify-content-center">
               <div className="col-5 item-photo">
                    <img style={{maxWidth:'500px'}} src={props.imgUrl} alt="Imagen Producto"></img>
                </div>
                <div className="col-4">
                    <h3>{props.Name}</h3>    
                    <h5 style={{color:'#337ab7'}}>Categoria <span>{props.Category}</span> · </h5>
                    <h6 className="title-price"><small>PRECIO</small></h6>
                    <h3 style={{marginTop:'0px'}}>${props.Price}</h3>       
                    <ItemCount {...props}/>                                 
                </div>
            <div className="row justify-content-center">
                <div className="col-9">
                    <h4>Descripción del Producto:</h4>
                    <p> {props.Description} </p>

                </div>
            </div>                              
            </div>
        </div>         

</>   
    )
}

