import React, { useContext } from "react";
import { myContext } from "../Context";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserPage = () => {
  const { userObject, setUserObject } = useContext(myContext);
  const userId = userObject.id;
  const addEventsUrl = "/addEvents/" + userId;
  const viewEventsUrl = "/user/viewEvents/" + userId;

  return (
    <>
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col xs lg="2"></Col>
          <Col className="text-center">
            <h1>{"Event Dashboard for " + userObject.name}</h1>
          </Col>
          <Col xs lg="2"></Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs lg="2"></Col>
          <Col className="text-center">
            <p>{userObject.email}</p>
          </Col>
          <Col xs lg="2"></Col>
        </Row>

        <Row>
          <Col xs lg="2"></Col>
          <Col className="text-center">
            <div className="mb-2">
              <Link to={addEventsUrl}>
                <Button variant="success" size="lg">
                  Add Events
                </Button>
                {"  "}
              </Link>
              <Link to={viewEventsUrl}>
                <Button variant="info" size="lg">
                  View Events
                </Button>{" "}
              </Link>
            </div>
          </Col>
          <Col xs lg="2"></Col>
        </Row>
      </Container>
    </>
  );
};

export default UserPage;
