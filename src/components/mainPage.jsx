import { useSelector, useDispatch } from "react-redux";
// import { counteActions } from "../store";
import { Container, Row, Col } from "react-bootstrap";
import MainBox from "./mainBox";
import Sidebar from "./sidebar";

const MainPage = () => {
  // const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  // const toggle = useSelector((state) => state.toggle);
  const appData = useSelector((state) => state.appData);
  // debugger;
  // console.log(counter);
  return (
    <>
      {/* <p>{counter && counter}</p> */}
      <p>{appData && appData.username}</p>

      <Container>
        <Row>
          <Col md={3} className="d-none d-md-block">
            <Sidebar />
          </Col>
          <Col md={9} xs={12}>
            <h1>
              <MainBox />
            </h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MainPage;
