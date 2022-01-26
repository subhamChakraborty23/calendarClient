import React, { useState } from "react";
import es from "date-fns/locale/es";
import { Form, Row, Button, Col, Container } from "react-bootstrap";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import { useParams } from "react-router";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import EventApi from "../api/EventApi";
import axios from "axios";

setDefaultLocale("es", es);

const AddEvent = (props) => {
  // const { userObject, setUserObject, isLoggedIn } = useContext(myContext);
  //{
  //     "title":"task3",
  //     "description":"this is an example description about the task",
  //     "startDate":"2021-12-19",
  //     "startTime":"14:30:01",
  //     "endDate":"2021-12-21",
  //     "endTime":"12:20:00",
  //     "createdBy":"subham3"
  // }
  //read id from props
  const {userId} = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date().getTime());
  const [endDate, setEndDate] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date().getTime());
  const [createdBy, setCreatedBy] = useState("");
  const url = process.env.REACT_APP_SERVER_URL

  const parseDate = (date) => {
    return moment(date).format("YYYY-MM-DD");
    
  };
  const parseTime = (time) => {
    return moment(time).format("HH:mm:ss");
    
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    const startDateString = parseDate(startDate);
    const startTimeString = parseTime(startTime);
    const endDateString = parseDate(endDate);
    const endTimeString = parseTime(endTime);
    const newEvent = {
      title,
      description,
      startDate: startDateString,
      startTime: startTimeString,
      endDate: endDateString,
      endTime: endTimeString,
      createdBy,
    };
    // console.log(newEvent);
    try{
      const response = await axios.post(`${url}/api/v1/users/${userId}/events`,{
        title,
        description,
        startDate: startDateString,
        startTime: startTimeString,
        endDate: endDateString,
        endTime: endTimeString,
        createdBy,
      });
      console.log(response);
      if(response.status === 201){
        alert("Event created successfully");
        props.history.push(`/users/${userId}`);
      }else{
        alert("Event creation failed");
        
      }
     
    }catch(err){
      console.log(err);

    }

  };

  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Form.description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Created By</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter event creator's name"
            onChange={(e) => setCreatedBy(e.target.value)}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="startDate">
            <Form.Label>Start Date</Form.Label>
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
              }}
              dateFormat="yyyy-MM-dd"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="startTime">
            <Form.Label>Start Time</Form.Label>
            <DatePicker
              selected={startTime}
              onChange={(time) => {
                setStartTime(time);
              }}
              showTimeSelect
              showTimeSelectOnly
              dateFormat="hh:mm:ss"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="startDate">
            <Form.Label>End Date</Form.Label>
            <DatePicker
              selected={endDate}
              onChange={(date) => {
                setEndDate(date);
              }}
              dateFormat="yyyy-MM-dd"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="endTime">
            <Form.Label>End Time</Form.Label>
            <DatePicker
              selected={endTime}
              onChange={(time) => {
                setEndTime(time);
              }}
              showTimeSelect
              showTimeSelectOnly
              dateFormat="hh:mm:ss"
            />
          </Form.Group>
        </Row>
        <Form.Group as={Row} className="mb-3">
          <Col className="text-center">
            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Col>
        </Form.Group>
      </Form>
      <Row>
        <Col></Col>
        <Col className="text-center">

        </Col>
        <Col></Col>
      </Row>
    </>
  );
};

export default AddEvent;
