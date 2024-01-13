import Step from "@modules/step/step";
import SchedulePicker from "@modules/form/schedule/schedule";
import { Breadcrumb } from "react-bootstrap";

const ScheduleStep = () => (
  <>
    <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/booking">Booking</Breadcrumb.Item>
      <Breadcrumb.Item href="/schedule" active>
        Schedule
      </Breadcrumb.Item>
    </Breadcrumb>
    <Step />
    <SchedulePicker />
  </>
);
export default ScheduleStep;
