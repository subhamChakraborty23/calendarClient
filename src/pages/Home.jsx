import React, { useContext } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";

import { myContext } from "../Context";

const Home = () => {
    
  const {userObject,setUserObject,isLoggedIn,setIsLoggedIn} = useContext(myContext);
  console.log(userObject);
  return (
    <>
    <Container fluid>
      <Row className="justify-content-md-center">
      <Col xs lg="2"></Col>
        <Col className="justify-content-md-center">
          <Card bg="light" text="dark" className="text-center" style={{width:'100%',marginTop:"5rem",height:"20rem"}} border="warning">
            <Card.Header >Events App</Card.Header>
            <Card.Body>
              <Card.Title>
                The best app for adding events in your calendar
              </Card.Title>
              <Card.Text>
                {isLoggedIn ? (
                  <h1>Welcome back {userObject.name}</h1>
                ) : (
                  <h1>Welcome To Events App </h1>
                )}
              </Card.Text>
              <h1>📆</h1>
            </Card.Body>
          </Card>
          
        </Col>
        <Col xs lg="2"></Col>
      </Row>
    </Container>
    <Footer />
    </>
  );
};

export default Home;
