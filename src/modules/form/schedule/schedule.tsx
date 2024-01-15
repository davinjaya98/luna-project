import { useState } from "react";
import { Form, Button, Stack, Row, Col } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import LocationDirectorLabel from "@components/label/location-director/location-director-label";
import ScheduleItem, {
  type Item,
} from "@modules/form/schedule/sub-components/schedule-item/schedule-item";
import NavigationButton from "@components/button/navigation/navigation-button";
import "./schedule.scss";

const SchedulePicker = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(
    undefined
  );

  return (
    <Form action="/schedule" method="get">
      <Stack direction="horizontal" gap={1}>
        <LocationDirectorLabel director="From" location="Batam" />
        <LocationDirectorLabel director="To" location="Singapore" />
      </Stack>
      <Pagination className="schedule-pagination justify-content-between">
        <Pagination.Prev />
        <div className="d-flex gap-2">
          <Pagination.Item>{5}</Pagination.Item>
          <Pagination.Item>{6}</Pagination.Item>
          <Pagination.Item active>{7}</Pagination.Item>
          <Pagination.Item>{8}</Pagination.Item>
          <Pagination.Item>{9}</Pagination.Item>
          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item>{14}</Pagination.Item>
          <Pagination.Item>{15}</Pagination.Item>
        </div>
        <Pagination.Next />
      </Pagination>
      <Stack gap={3} className="mb-2">
        {[
          {
            providerName: "Magestic",
            availableSeat: 46,
            date: "Thu, 17 Jul 2023",
            departureTime: "07:30",
            arrivalTime: "08:30",
            pricing: [
              {
                type: "infrant",
                price: 200_000,
              },
              {
                type: "teenager",
                price: 300_000,
              },
              {
                type: "adult",
                price: 400_000,
              },
            ],
          },
          {
            providerName: "BatamFast",
            availableSeat: 20,
            date: "Thu, 17 Jul 2023",
            departureTime: "08:30",
            arrivalTime: "09:30",
            pricing: [
              {
                type: "all",
                price: 300_000,
                twoWay: 360_000,
              },
            ],
          },
        ].map((item, index) => (
          <Row>
            <Col>
              <ScheduleItem
                item={item as Item}
                selected={index === selectedIndex}
              />
            </Col>
          </Row>
        ))}
      </Stack>

      <Stack direction="horizontal" gap={3} className="justify-content-between">
        <NavigationButton
          href="/booking"
          style={{ backgroundColor: "#EEE", color: "#0D278F" }}
        >
          <img src="./assets/arrow-left-primary.svg" alt="arrow-left-primary" />
          Back
        </NavigationButton>
        <NavigationButton>
          Next
          <img src="./assets/arrow-right-white.svg" alt="arrow-right-white" />
        </NavigationButton>
      </Stack>
    </Form>
  );
};

export default SchedulePicker;
