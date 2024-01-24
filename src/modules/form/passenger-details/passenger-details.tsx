import { useState } from "react";
import { Form, Button, Row, Col, Stack, Accordion } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

import PassengerDetailsItem from "./passenger-details-item/passenger-details-item";
import { PassengerDetail } from "./passenger-details-item/passenger-details-item";

const PassengerDetailsForm = () => {
  const [passengers, setPassengers] = useState<Array<PassengerDetail>>([
    new PassengerDetail(
      "Test1",
      "TestPassport1",
      "1986-02-01",
      "2027-01-04",
      "Malaysia" // not in option
    ),
    new PassengerDetail(
      "Test2",
      "TestPassport2",
      "1999-09-09",
      "2027-03-02",
      "Indonesia"
    ),
  ]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleSave() {
    // MARK: -TODO Save before dismissing
    setShow(false);
  }

  return (
    <Stack gap={3}>
      <Accordion>
        {passengers.length !== 0 &&
          passengers.map((passenger, index) => (
            <PassengerDetailsItem
              eventKey={index.toString()}
              index={index + 1}
              passenger={passenger}
            />
          ))}
      </Accordion>
      <div className="d-grid">
        <Button variant="secondary" onClick={handleShow}>
          + Add More Passenger
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="border-0" closeButton>
          <Modal.Title>Save Pesenger details?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          New pesenger detected. Do you want to save this data?
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button variant="outline-primary" onClick={handleClose}>
            Maybe Next Time
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </Stack>
  );
};

export default PassengerDetailsForm;
