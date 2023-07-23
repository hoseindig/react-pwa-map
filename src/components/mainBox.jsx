import { Container, Row, Col } from "react-bootstrap";
import MapComponent from "./mapBox";
import React, { useState } from "react";
const MainBox = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };
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
          {latitude && longitude && (
            <p>
              Latitude: {latitude}, Longitude: {longitude}
            </p>
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          <MapComponent latitude={latitude} longitude={longitude} />
          <button onClick={() => getLocation()}>getLocation</button>
        </Col>
      </Row>
    </Container>
  );
};

export default MainBox;
