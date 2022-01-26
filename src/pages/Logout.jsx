import React, { useContext } from "react";
import { Form, Row, Col, Button, Card } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

import axios from "axios";
import { myContext } from "../Context";

const Logout = () => {
  let navigate = useNavigate();
  const { userObject, setUserObject, isLoggedIn, setIsLoggedIn } =
    useContext(myContext);
  const url = "http://localhost:4000";
  const logout = async() => {
    await axios
      .get(`https://event-backend-api.herokuapp.com/auth/logout`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.success) {
          setUserObject(null);
          setIsLoggedIn(false);
          // window.location.pathname = "/login";
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Form>
      <Row className="justify-content-md">
        <Col xs lg="2"></Col>
        <Col className="md" style={{ marginTop: "10rem", height: "20rem" }}>
          <Card
            bg="light"
            text="dark"
            className="text-center"
            style={{ width: "100%" }}
            border="danger"
          >
            <Card.Header as="h5">Login</Card.Header>
            <Card.Body>
              <Card.Title>Do you want to logout?</Card.Title>
              <div className="d-grid gap-4">
                <Button variant="warning" size="md" onClick={logout}>
                  Logout
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs lg="2"></Col>
      </Row>
    </Form>
  );
};

export default Logout;
