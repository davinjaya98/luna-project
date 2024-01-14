import { Container, Stack } from "react-bootstrap";
import { Card, type CardProps } from "react-bootstrap";

import "./schedule-item.scss";

export interface Item {
  providerName: string;
  availableSeat: number;
  date: string;
  departureTime: string;
  arrivalTime: string;
}

const ScheduleItem = (item: Item) => {
  return (
    <Card className="schedule-item">
      <Stack direction="vertical" gap={3}>
        <Stack
          direction="horizontal"
          gap={3}
          className="justify-content-between"
        >
          <div className="d-flex align-items-center">
            <div className="logo me-2"></div>
            <p className="mb-0">{item.providerName}</p>
          </div>
          <div className="d-flex justify-content-end align-items-center">
            <div className="seatStatus me-2"></div>
            <p className="mb-0">
              <strong>{item.availableSeat} Seat</strong> Available
            </p>
          </div>
        </Stack>
        <Stack
          direction="horizontal"
          gap={3}
          className="justify-content-between align-items-stretch"
        >
          <div className="d-flex align-items-start flex-column">
            <p className="mb-0">
              <strong>Date</strong>
            </p>
            <p className="mb-0">{item.date}</p>
          </div>
          <div className="d-flex align-items-start flex-column">
            <p className="mb-0">
              <strong>Departure - Arrival</strong>
            </p>
            <p className="mb-0">
              {item.departureTime} - {item.arrivalTime}
            </p>
          </div>
          <div className="d-flex align-items-start flex-column">
            <p className="mb-0">
              <strong>Price Start From</strong>
            </p>
            <div className="d-flex justify-content-start align-items-center">
              <div className="price me-2"></div>
              <p className="mb-0">Rp 1.000.000</p>
            </div>
          </div>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ScheduleItem;
