import { Stack } from "react-bootstrap";

import "./schedule-item.scss";

export interface ItemPricing {
  type: string;
  price: number;
  twoWay?: number;
}
export interface Item {
  providerName: string;
  availableSeat: number;
  date: string;
  departureTime: string;
  arrivalTime: string;
  pricing: [ItemPricing];
}

const ScheduleItem = ({
  item,
  selected,
}: {
  item: Item;
  selected?: Boolean;
}) => {
  return (
    <Stack
      direction="horizontal"
      gap={1}
      className="schedule-item align-items-stretch"
      style={{ borderColor: selected ? "#0D278F" : "#99c9e9" }}
    >
      <Stack direction="vertical" gap={3} className="m-3">
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
              <p className="mb-0">
                Rp {Math.min(...item.pricing.flatMap((x) => x.price))}
              </p>
            </div>
          </div>
        </Stack>
      </Stack>
      <div
        className="check d-flex align-items-center justify-content-center"
        style={{
          backgroundColor: selected ? "#0D278F" : "transparent",
          outlineColor: selected ? "#0D278F" : "#99c9e9",
        }}
      >
        <img src="./assets/check.svg" alt="check" />
      </div>
    </Stack>
  );
};

export default ScheduleItem;
