import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import ItemCount from "./ItemCount";
import cartContext from "../context/cartContext";

export default function ItemDetail(props){

    const cartInContext = useContext(cartContext);


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

{/* 
        <div class="container">
        	<div class="row">
               <div class="col-xs-4 item-photo">
                    <img style={{maxWidth:'100%'}} src={props.imgUrl} ></img>
                </div>
                <div class="col-xs-5">
                    
                    <h3>{props.Name}</h3>    
                    <h5 style={{color:'#337ab7'}}>Categoria <a href="#">{props.Category}</a> · </h5>
        
                  
                    <h6 class="title-price"><small>PRECIO OFERTA</small></h6>
                    <h3 style={{marginTop:'0px'}}>$ {props.Price}</h3>
                
                    
                    <div class="section" style={{paddingBottom:'20px'}}>
                        <h6 class="title-attr"><small>CANTIDAD</small></h6>                    
                        <div>
                            <ItemCount {...props}/>
                        </div>
                    </div>                
        
                    
                    <div class="section" style={{paddingBottom:'20px'}}>
                        <button onClick={()=>cartInContext.addItem()} class="btn btn-success"><span style={{marginRight:'20px'}} class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span> Agregar al carro</button>
                    </div>                                        
                </div>                              
        
            </div>
        </div>         */}

</>



        
    )
}

