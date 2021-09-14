import { Container, Row, Col } from "react-bootstrap";
import ItemList from "./ItemList";
import { useState,useEffect, useContext } from "react";
import { useParams } from "react-router";
import productsContext from "../context/productsContext";

export default function ItemListContainer (){
    const [products, setProducts] = useState([]);
    const productsInContext = useContext(productsContext);
    const {id} = useParams();

    useEffect(()=>{


    },[])






    return(
        <>
        <Container fluid >
            <Col lg="8" className="contenedor">   
            <Row xs={2} md={4} lg={7}>           
                    <ItemList category={id}/>    
            </Row>
            </Col> 
        </Container>
        </>
    )
}