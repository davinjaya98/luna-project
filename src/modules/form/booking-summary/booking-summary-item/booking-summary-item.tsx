import type { FC } from "react";
import { Stack } from "react-bootstrap";
import {
  Image,
  ListGroupItem,
  type ListGroupItemProps,
  Form,
} from "react-bootstrap";

import classNames from "classnames";

const BookingSummaryItem: FC<ListGroupItemProps> = ({
  className,
  ...props
}) => {
  return (
    <ListGroupItem
      className={classNames(className, "border-0", "p-0", "mt-1", "mb-1")}
      {...props}
    >
      <Stack
        direction="horizontal"
        gap={2}
        className={classNames("align-items-center")}
      >
        <Image src="./assets/passenger-primary.svg" />
        <p className={classNames("m-0", "p-0", "text-primary")}>Name</p>
        <Image src="./assets/info-primary.svg" />

        <Form.Check // prettier-ignore
          type="switch"
          id="two-way-switch"
          label="Two-Way"
        />
      </Stack>
    </ListGroupItem>
  );
};

export default BookingSummaryItem;
