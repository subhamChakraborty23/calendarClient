import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Row, Container, Col } from "react-bootstrap";
import axios from "axios";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import moment from "moment";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import endOfWeek from "date-fns/endOfWeek";
import "react-big-calendar/lib/css/react-big-calendar.css";
import PopUp from "./PopUp";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  endOfWeek,
  getDay,
  locales,
});
const EventList = ({events,isLoading}) => {
  

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
          <Container fluid>
            <Row>
              <Col xs lg="2"></Col>
              <Col className="text-center">
                <h2>Calendar</h2>
              </Col>
              <Col xs lg="2"></Col>
            </Row>
            
            <Row>
              
              <Col>
                <Calendar
                  localizer={localizer}
                  events={events}
                  toolbar={true}
                  startAccessor="startDate"
                  endAccessor="endDate"
                  style={{ height: 500 }}
                  defaultDate={new Date()}
                  step={60}
                  showMultiDayTimes
                  defaultView="month"
                  views={["month"]}
                  onSelectEvent={(event) => {
                      alert(
                    `
                    Event: ${event.title}
                    Start Time: ${event.startTime}
                    End Time: ${event.endTime}
                    Description: ${event.description}
                    `)
                    // <PopUp event={event}></PopUp>
                }}
                  onSelectSlot={(slotInfo) => {
                    alert(
                      `selected slot: \n\nstart ${slotInfo.startDate.toLocaleString()} ` +
                        `\nend: ${slotInfo.endDate.toLocaleString()}` +
                        `\naction: ${slotInfo.title}`
                    );
                    
                  }}
                  popup={true}
                />
              </Col>
              
            </Row>
          </Container>
          {/* */}

        </Container>
      )}
    </>
  );
};

export default EventList;
