import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import EventView from "../components/EventView";
import EventTableView from "../components/EventTableView";
import { Row, Col, Container, Button } from "react-bootstrap";
import axios from "axios";

const EventsPage = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [showEventTable, setShowEventTable] = useState(false);
  const [events, setEvents] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { userId } = useParams();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/v1/users/${userId}/events`
        );
        setEvents(response.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  return (
    <>
      <Container fluid>
        <Row>
          <Col xs lg="2"></Col>
          <Col className="text-center">
            <Button
              variant="warning"
              size="lg"
              onClick={(e) => {
                setShowCalendar(true);
                setShowEventTable(false);
              }}
            >
              Calendar View
            </Button>{" "}
            <Button
              variant="success"
              size="lg"
              onClick={(e) => {
                setShowEventTable(true);
                setShowCalendar(false);
              }}
            >
              Event Table View
            </Button>
          </Col>
          <Col xs lg="2"></Col>
        </Row>
        <hr></hr>
        <Row>
          <Col>
            {showCalendar ? (
              <EventView events={events} isLoading={isLoading} />
            ) : null}
            {showEventTable ? (
              <EventTableView events={events} isLoading={isLoading} setEvents/>
            ) : null}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EventsPage;
