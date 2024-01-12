import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const BookingForm = () => {
  return (
    <Form>
      <Form.Group>
        To
        <Form.Select>
          {[
            {
              key: "g",
              text: "Gender",
              value: "",
            },
            {
              key: "m",
              text: "Malaysia",
              value: "Malaysia",
            },
            {
              key: "s",
              text: "Singapore",
              value: "Singapore",
            },
          ].map(({ key, text, value }) => (
            <option value={value} key={key}>
              {text}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group>
        <Form.Select>
          {[
            {
              key: "g",
              text: "Gender",
              value: "",
            },
            {
              key: "m",
              text: "Malaysia",
              value: "Malaysia",
            },
            {
              key: "s",
              text: "Singapore",
              value: "Singapore",
            },
          ].map(({ key, text, value }) => (
            <option value={value} key={key}>
              {text}
            </option>
          ))}
        </Form.Select>
        <Form.Check // prettier-ignore
          type="switch"
          id="return-date"
          label="Return date"
        />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default BookingForm;
