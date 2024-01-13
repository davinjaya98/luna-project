import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import LocationDirectorLabel from "@components/form/location-director-label";

const BookingForm = () => {
  return (
    <Form action="/schedule" method="get">
      <Form.Group className="mb-3" controlId="formDestination">
        <div>
          <LocationDirectorLabel director="From" location="Batam" />
        </div>
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
