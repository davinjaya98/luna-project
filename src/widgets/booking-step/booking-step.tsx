import BookingForm from "@assets/form/booking/booking";
import { Segment } from "semantic-ui-react";
import Step from "@modules/step/step";

const BookingStep = () => (
  <>
    <Step />

    <Segment attached>
      <BookingForm />
    </Segment>
  </>
);
export default BookingStep;
