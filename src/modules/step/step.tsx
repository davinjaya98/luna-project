import BookingForm from "@assets/form/booking/booking";
import { Segment, Step } from "semantic-ui-react";

const BookingStep = () => (
  <>
    <Step.Group unstackable attached="top">
      <Step>
        <Step.Content>
          <Step.Title>Home</Step.Title>
        </Step.Content>
      </Step>
      <Step active>
        <Step.Content>
          <Step.Title>Booking</Step.Title>
        </Step.Content>
      </Step>
      <Step disabled>
        <Step.Content>
          <Step.Title>Schedule</Step.Title>
        </Step.Content>
      </Step>
      <Step disabled>
        <Step.Content>
          <Step.Title>Passenger Detail</Step.Title>
        </Step.Content>
      </Step>
    </Step.Group>

    <Segment attached>
      <BookingForm />
    </Segment>
  </>
);
export default BookingStep;
