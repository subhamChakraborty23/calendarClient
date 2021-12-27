import React ,{useState}from 'react'
import { Modal,Button } from 'react-bootstrap'

const PopUp = (event) => {
    const [show, setShow] = useState(true);
    return (
        <>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{event.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Start-Time: {event.startTime} End-Time: {event.endTime}</p>
                    <p>Description: {event.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

    </>
    )
}

export default PopUp
