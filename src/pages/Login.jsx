import React from "react";
import { Form, Row, Col, Button, Card } from "react-bootstrap";


const Login = () => {
  const url = process.env.REACT_APP_SERVER_URL
  const googleLogin = () => {
    window.open(`${url}/auth/google`, "_self");
    
  };

  return (
    <Form>
      <Row className="justify-content-md">
        <Col xs lg="2"></Col>
        <Col className="md" style={{marginTop:"10rem",height:"20rem"}}>
          <Card
            bg="light"
            text="dark"
            className="text-center"
            style={{ width: "100%" }}
            border="danger"
          >
            <Card.Header as="h5">Login</Card.Header>
            <Card.Body>
              <Card.Title>Please login to create events</Card.Title>
              <div className="d-grid gap-4">
                <Button variant="danger" size="md" onClick={googleLogin}>
                  Google
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

export default Login;
