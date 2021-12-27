import React from 'react'
import { useParams } from 'react-router-dom';
import {Row, Container, Col, Button} from 'react-bootstrap';
import UpdateEvent from '../components/UpdateEvent';

const UpdateEventPage = () => {
    const {userId,eventId} = useParams();
    return (
        <>
            <Container fluid>
                <Row>
                    <Col xs lg="2"></Col>
                    <Col className="text-center" style={{margin:"1rem"}}>
                        <h1>Update Event</h1>
                    </Col>
                    <Col xs lg="2"></Col>
                </Row>
                <Row>
                    <Col xs lg="2"></Col>
                    <Col>
                        <UpdateEvent userId={userId} eventId={eventId}/>
                    </Col>
                    <Col xs lg="2"></Col>
                </Row>

            </Container>
           
        </>
    )
}

export default UpdateEventPage
