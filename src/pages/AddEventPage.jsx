import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Container, Row, Col, Button } from "react-bootstrap";
import AddEvent from "../components/AddEvent";
import axios from "axios";

const AddEventPage = () => {
  //read id frrom params
  const { userId } = useParams();
  const [userExist, setUserExist] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      
      try {
        const response = await axios.get(`http://localhost:4000/api/v1/users/${userId}`);
        setUser(response.data);
        setUserExist(true);
        setLoading(false);
      } catch (err) {
        setUserExist(false);
        setLoading(false);
      }
    };
    fetchUser();
  }, []);
  return (
    <>
      {userExist ? (
        <Container fluid>
          <Row>
            <Col xs lg="2"></Col>
            <Col className="text-center">
              <h1>Add Event for {user.name}</h1>
            </Col>
            <Col xs lg="2"></Col>
          </Row>
          <Row>
            <Col xs lg="2"></Col>
            <Col>
              <AddEvent userId={userId} />
            </Col>
            <Col xs lg="2"></Col>
          </Row>
        </Container>
      ) : (
        <Container fluid>
          <Row>
            <Col xs lg="2"></Col>
          </Row>
          <Row>
            <Col xs lg="2"></Col>
            <Col className="text-center">
              {isLoading ? <h1>Loading...</h1> : <h1>User not found</h1>}
            </Col>
            <Col xs lg="2"></Col>
          </Row>
          <Row>
            <Col xs lg="2"></Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default AddEventPage;
