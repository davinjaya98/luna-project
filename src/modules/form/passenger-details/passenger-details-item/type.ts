import type { AccordionItemProps } from "react-bootstrap";
import type { PassengerDetail } from "./passenger-details-item";

export interface PassengerDetailItemProps extends AccordionItemProps {
  index: number;
  passenger: PassengerDetail;
}
