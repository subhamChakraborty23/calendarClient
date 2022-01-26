import { Button, Col, Row, Container, Card } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const EventDetailsPage = () => {
    const navigate = useNavigate();
  const [event, setEvent] = useState({});
  const [isLoading, setLoading] = useState(true);
  const { userId, eventId } = useParams();
  const url = process.env.REACT_APP_SERVER_URL

  const parseDate = (date) => {
    return moment(date).format("YYYY-MM-DD");
  };

  const handleDelete = async (e,eventId) => {
    e.preventDefault();
    // console.log(eventId);
    try {
        const res = await axios.delete(`${url}/api/v1/users/${userId}/events/${eventId}`);
        if(res.status === 200){
            //navigate to events page
            navigate("/user/viewEvents/"+userId);
            
        }
    } catch (err) {
        console.log(err);
    }
};
const handleUpdate = async (e,eventId) => {
    e.preventDefault();
    navigate("/user/"+userId+"/updateEvent/"+eventId);
};

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/v1/users/${userId}/events/${eventId}`
        );
        setEvent(response.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);
  return (
    <>
      {isLoading ? (
        <Container fluid>
          <Row>
            <Col xs lg="2"></Col>
            <Col className="text-center">
              <h1>Loading...</h1>
            </Col>
            <Col xs lg="2"></Col>
          </Row>
          <Row>
            <Col xs lg="2"></Col>
          </Row>
        </Container>
      ) : (
        <Container fluid>
          <Row className="justify-content-md">
            <Col xs lg="2"></Col>
            <Col className="md" style={{ marginTop: "10rem", height: "20rem" }}>
              <Card className="text-center" style={{ width: "100%" }}>
                <Card.Header as="h5">Event Details</Card.Header>
                <Card.Body>
                  <Card.Title>{event.title}</Card.Title>
                  <Card.Text>Description : {event.description}</Card.Text>
                  <Card.Text>
                    Start Date : {parseDate(event.startDate)} Start Time :{" "}
                    {event.startTime}
                  </Card.Text>
                  <Card.Text>
                    End Date : {parseDate(event.endDate)} End Time : {event.endTime}
                  </Card.Text>
                  <Card.Text>Event Created By : {event.createdBy}</Card.Text>
                  <Button variant="danger" onClick={(e)=>{
                      handleDelete(e,event.id);
                  }}>Delete</Button>{" "}
                  <Button variant="primary" onClick={(e)=>handleUpdate(e,event.id)}>Update</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs lg="2"></Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default EventDetailsPage;
