import { useState } from "react";
import { Form, Button } from "semantic-ui-react";

const BookingForm = () => {
  const [showReturnDate, shouldShowReturnDate] = useState(false);
  const [formState, setFormState] = useState({});

  const handleChange = (e, { value }) => setFormState({ value });
  const handleToggleChange = (e) => console.log(e.value);

  return (
    <Form size="mini">
      <Form.Group widths="equal">
        <Form.Select
          fluid
          label="To"
          options={[
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
          ]}
          placeholder="Gender"
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Select
          fluid
          label="Date"
          options={[
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
          ]}
          placeholder="dd/mm/yy"
          onChange={handleToggleChange}
        />
        <Form.Radio toggle label="Return Date" />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default BookingForm;
