import { Container, Row, Col } from "react-bootstrap";
import MapComponent from "./mapBox";

const MainBox = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Main Box</h1>
        </Col>
        <Col></Col>
        <Col></Col>
      </Row>
      <Row>
        <Col>
          <MapComponent />
        </Col>
      </Row>
    </Container>
  );
};

export default MainBox;
