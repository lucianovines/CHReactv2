import { Container, Row, Col } from "react-bootstrap";
import ItemList from "./ItemList";
import { useParams } from "react-router";
import Banner from "./banner";


export default function ItemListContainer (){
    const {id} = useParams();
    
    return(
        <>
        <Banner />
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