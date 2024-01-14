import { useState } from "react";
import { Form, Button, Row, Col, Stack } from "react-bootstrap";

import "./booking.scss";

const BookingForm = () => {
  const [hasReturnDate, setHasReturnDate] = useState<boolean>(false);

  const handleTwoWaySwitch = (e: React.FormEvent<HTMLInputElement>) => {
    setHasReturnDate(e.currentTarget.checked);
  };

  return (
    <Form action="/schedule" method="get" className="schedule-form">
      <Stack gap={3}>
        <Row className="align-items-center">
          <Col sm="1">
            <Form.Label>To</Form.Label>
          </Col>
          <Col sm="5">
            <Form.Select required>
              <option value="" key="">
                Please Select Destination
              </option>
              {[
                {
                  text: "Johor",
                  value: "Johor",
                },
                {
                  text: "Singapore",
                  value: "Singapore",
                },
              ].map(({ text, value }, index) => (
                <option value={value} key={index}>
                  {text}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col sm="1">
            <Form.Label>Date</Form.Label>
          </Col>
          <Col sm="5">
            <Form.Control id="departure-date" type="date" required />
          </Col>
          <Col sm="6">
            <Form.Group>
              <Form.Check
                type="switch"
                id="two-way"
                label="Return Date"
                checked={hasReturnDate}
                onChange={handleTwoWaySwitch}
              />
            </Form.Group>
          </Col>
        </Row>
        {hasReturnDate && (
          <Row className="align-items-center">
            <Col sm="1">
              <Form.Label>Return Date</Form.Label>
            </Col>
            <Col sm="5">
              <Form.Control type="date" required={hasReturnDate} />
            </Col>
          </Row>
        )}
        <Row>
          <Col sm="6">
            <div className="d-grid">
              <Button variant="primary" type="submit">
                Search
              </Button>
            </div>
          </Col>
        </Row>
      </Stack>
    </Form>
  );
};

export default BookingForm;
