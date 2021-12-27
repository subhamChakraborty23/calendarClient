import React, { useState, useEffect } from "react";
import {  useParams } from "react-router";
import { useNavigate , Navigate } from "react-router-dom";
import { Row, Container, Col ,Alert, Table, Button} from "react-bootstrap";
import axios from "axios";
import moment from "moment";

const EventTableView = ({events,isLoading,setEvents}) => {
    const navigate = useNavigate();
    const userId = useParams().userId;
  
    const parseDate = (date) => {
        const dateObj = new Date(date);
        return moment(dateObj).format("MMM Do YYYY");
    };
    const sortEventsByDate = (events) => {
        return events.sort((a, b) => {
            return new Date(b.startDate) - new Date(a.startDate);
        });
    };
    sortEventsByDate(events);
    const sortEventsByTime = (events) => {
        return events.sort((a, b) => {
            return new Date(b.startTime) - new Date(a.startTime);
        });
    };
    sortEventsByTime(events);

    
    const handleEventSelect = (e,eventId) => {
        e.preventDefault();
        const url = `/user/${userId}/eventDetails/${eventId}`;
        navigate(url);
    };
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
          <Row>
            <Col xs lg="2"></Col>
            <Col className="text-center">
              <h1>Events:</h1>
            </Col>
            <Col xs lg="2"></Col>
          </Row>
          {/* <Row>
            <Col xs lg="2"></Col>
            <Col>
                <Button variant="primary" size="lg" block onClick={sortEventsByDate}>Sort By Date</Button>{" "}
                <Button variant="primary" size="lg" block onClick={sortEventsByTime}>Sort By Time</Button>
            </Col>
            <Col xs lg="2"></Col>
          </Row> */}
          <Row>
            
            <Col>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr> 
                        <th>#</th>   
                        <th>Event Tile</th>
                        <th>Start Date</th>
                        <th>Start Time</th>
                        <th>End Date</th>
                        <th>End Time</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {events.map((event) => (
                        <tr key={event.id} onClick={(e)=>handleEventSelect(e,event.id)}>
                            <td>{event.id}</td>
                            <td>{event.title}</td>
                            <td>{parseDate(event.startDate)}</td>
                            <td>{event.startTime}</td>
                            <td>{parseDate(event.endDate)}</td>
                            <td>{event.endTime}</td>
                            {/* <td>
                                <Button variant="danger" onClick={(e)=>handleDelete(e,event.id)}>Delete</Button>{" "}
                                
                            </td>
                            <td>
                            <Button variant="info">Update</Button>{" "}
                            </td> */}
                        </tr>
                    ))}
                </tbody>
            </Table>
            </Col>
            
          </Row>
        </Container>
      )}
    </>
  );
};

export default EventTableView;
