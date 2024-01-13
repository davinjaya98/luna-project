import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import LocationDirectorLabel from "@components/form/location-director-label";
import CircleButton from "@components/button/circle/circle-button";

const SchedulePicker = () => {
  return (
    <Form action="/schedule" method="get">
      <div>
        <LocationDirectorLabel director="From" location="Batam" />{" "}
        <LocationDirectorLabel director="To" location="Singapore" />
      </div>
      <div>
        <CircleButton />
      </div>
    </Form>
  );
};

export default SchedulePicker;
