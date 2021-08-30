import { Container, Col, Row } from "react-bootstrap"
import ItemListContainer from "../components/ItemListContainer"


export default function home(){
    return(
        <>
        <Container fluid>
            <Row className="asd">
                <Col className="pPrincipal d-flex align-items-center justify-content-center">
                    <h1>Productos</h1>                  
                </Col>
            </Row>
        </Container>
        <ItemListContainer/>
        </>
    )
}