import Step from "@modules/step/step";
import SchedulePicker from "@modules/form/schedule/schedule";
import { Breadcrumb } from "@components/breadcrumb/breadcrumb";

const ScheduleStep = () => (
  <>
    <Breadcrumb />
    <Step />
    <SchedulePicker />
  </>
);
export default ScheduleStep;
