import { useState } from "react";
import { Form, Button, Row, Col, Stack, Accordion } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const PassengerDetailsForm = () => {
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
        <Accordion.Item eventKey="0">
          <Accordion.Header>Passenger - 01</Accordion.Header>
          <Accordion.Body>
            <Stack gap={3}>
              <Row>
                <Col xs="6">
                  <Form.Group controlId="name">
                    <Form.Label>Name on Passport</Form.Label>
                    <Form.Control type="text" placeholder="John Doe" />
                  </Form.Group>
                </Col>
                <Col xs="6">
                  <Form.Group controlId="passport">
                    <Form.Label>Passport No.</Form.Label>
                    <Form.Control type="text" placeholder="AXXXXXX" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs="6">
                  <Form.Group controlId="dob">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type="date" placeholder="dd/mm/yyyy" />
                  </Form.Group>
                </Col>
                <Col xs="6">
                  <Form.Group controlId="expiredDate">
                    <Form.Label>Expired Date</Form.Label>
                    <Form.Control type="date" placeholder="dd/mm/yyyy" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs="6">
                  <Form.Group controlId="placeOfIssued">
                    <Form.Label>Place of Issued</Form.Label>
                    <Form.Select>
                      <option>Please Select</option>
                      <option value="Indonesia">Indonesia</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col xs="6">
                  <Form.Group>
                    <Form.Label>Passenger Category</Form.Label>
                    <div className="d-flex align-items-center gap-1">
                      <span className="rounded-circle p-2 bg-secondary" />
                      <span className="base-font-sm text-primary">Adult</span>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        className="rounded-circle"
                      >
                        i
                      </Button>
                    </div>
                  </Form.Group>
                </Col>
              </Row>
            </Stack>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Passenger - 02</Accordion.Header>
          <Accordion.Body>
            <Stack gap={3}>
              <Row>
                <Col xs="6">
                  <Form.Group controlId="name">
                    <Form.Label>Name on Passport</Form.Label>
                    <Form.Control type="text" placeholder="John Doe" />
                  </Form.Group>
                </Col>
                <Col xs="6">
                  <Form.Group controlId="passport">
                    <Form.Label>Passport No.</Form.Label>
                    <Form.Control type="text" placeholder="AXXXXXX" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs="6">
                  <Form.Group controlId="dob">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type="date" placeholder="dd/mm/yyyy" />
                  </Form.Group>
                </Col>
                <Col xs="6">
                  <Form.Group controlId="expiredDate">
                    <Form.Label>Expired Date</Form.Label>
                    <Form.Control type="date" placeholder="dd/mm/yyyy" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs="6">
                  <Form.Group controlId="placeOfIssued">
                    <Form.Label>Place of Issued</Form.Label>
                    <Form.Select>
                      <option>Please Select</option>
                      <option value="Indonesia">Indonesia</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col xs="6">
                  <Form.Group>
                    <Form.Label>Passenger Category</Form.Label>
                    <div className="d-flex align-items-center gap-1">
                      <span className="rounded-circle p-2 bg-secondary" />
                      <span className="base-font-sm text-primary">Adult</span>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        className="rounded-circle"
                      >
                        i
                      </Button>
                    </div>
                  </Form.Group>
                </Col>
              </Row>
            </Stack>
          </Accordion.Body>
        </Accordion.Item>
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
