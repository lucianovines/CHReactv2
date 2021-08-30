import { Container, Row, Col } from "react-bootstrap";
import ItemList from "./ItemList";

export default function ItemListContainer (){

    return(
        <>
        <Container fluid >
            <Col lg="8" className="contenedor">   
            <Row xs={2} md={4} lg={7}>           
                    <ItemList />    
            </Row>
            </Col> 
        </Container>
        </>
    )
}