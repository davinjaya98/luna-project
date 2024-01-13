import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const BookingForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formDestination">
        <p>
          From <span style={{ fontSize: "200%" }}>Batam</span>
        </p>
        <Form.Label>To</Form.Label>
        <Form.Select value="">
          <option value="" key="" hidden>
            Destination
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
      </Form.Group>
      <Form.Group className="mb-3" controlId="formDepartureDate">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formTwoWay">
        <Form.Check // prettier-ignore
          type="switch"
          id="two-way"
          label="Two Way"
        />
      </Form.Group>
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default BookingForm;
