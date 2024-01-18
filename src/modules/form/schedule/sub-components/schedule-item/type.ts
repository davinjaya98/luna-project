import type { ListGroupItemProps } from "react-bootstrap";
import type { Item } from "./schedule-item";

export interface ScheduleItemProps extends ListGroupItemProps {
  item: Item;
  selected?: boolean;
}
