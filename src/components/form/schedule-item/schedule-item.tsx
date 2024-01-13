import { Container, Stack } from "react-bootstrap";

import "./schedule-item.scss";

const ScheduleItem = () => {
  return (
    <Container className="border p-2">
      <Stack direction="vertical" gap={3}>
        <Stack
          direction="horizontal"
          gap={3}
          className="justify-content-between"
        >
          <div className="d-flex align-items-center">
            <div className="logo me-2"></div>
            <p className="mb-0">Name</p>
          </div>
          <div className="d-flex justify-content-end align-items-center">
            <div className="seatStatus me-2"></div>
            <p className="mb-0">46 Seat Available</p>
          </div>
        </Stack>
        <Stack
          direction="horizontal"
          gap={3}
          className="justify-content-between align-items-stretch"
        >
          <div className="d-flex align-items-start flex-column">
            <p className="mb-0">Date</p>
            <p className="mb-0">Thu, 10 Jul 2023</p>
          </div>
          <div className="d-flex align-items-start flex-column">
            <p className="mb-0">Departure - Arrival</p>
            <p className="mb-0">10:00 - 11:00</p>
          </div>
          <div className="d-flex align-items-start flex-column">
            <p className="mb-0">Price Start From</p>
            <div className="d-flex justify-content-start align-items-center">
              <div className="price me-2"></div>
              <p className="mb-0">Rp 1.000.000</p>
            </div>
          </div>
        </Stack>
      </Stack>
    </Container>
  );
};

export default ScheduleItem;
