import type { FC } from "react";
import { Form, Button, Row, Col, Stack, Accordion } from "react-bootstrap";
import type { PassengerDetailItemProps } from "./type";

import classNames from "classnames";

export class PassengerDetail {
  name?: string;
  passport?: string;
  dob?: string;
  expiredDate?: string;
  issuedPlace?: string;
  constructor(
    name?: string,
    passport?: string,
    dob?: string,
    expiredDate?: string,
    issuedPlace?: string
  ) {
    this.name = name;
    this.passport = passport;
    this.dob = dob;
    this.expiredDate = expiredDate;
    this.issuedPlace = issuedPlace;
  }
}

const PassengerDetailsItem: FC<PassengerDetailItemProps> = ({
  className,
  ...props
}) => {
  return (
    <Accordion.Item className={classNames(className)} {...props}>
      <Accordion.Header>Passenger - {props.index}</Accordion.Header>
      <Accordion.Body>
        <Stack gap={3}>
          <Row>
            <Col xs="6">
              <Form.Group controlId="name">
                <Form.Label>Name on Passport</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="John Doe"
                  value={props.passenger.name}
                />
              </Form.Group>
            </Col>
            <Col xs="6">
              <Form.Group controlId="passport">
                <Form.Label>Passport No.</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="AXXXXXX"
                  value={props.passenger.passport}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs="6">
              <Form.Group controlId="dob">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="dd/mm/yyyy"
                  value={props.passenger.dob}
                />
              </Form.Group>
            </Col>
            <Col xs="6">
              <Form.Group controlId="expiredDate">
                <Form.Label>Expired Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="dd/mm/yyyy"
                  value={props.passenger.expiredDate}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs="6">
              <Form.Group controlId="placeOfIssued">
                <Form.Label>Place of Issued</Form.Label>
                <Form.Select value={props.passenger.issuedPlace}>
                  <option>Please Select</option>
                  <option value="Indonesia">Indonesia</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs="6">
              <Form.Group>
                <Form.Label>Passenger Category</Form.Label>
                <div className="d-flex align-items-center gap-1">
                  <span className="rounded-circle p-2 bg-secondary" />
                  <span className="base-font-sm text-primary">Adult</span>
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    className="rounded-circle"
                  >
                    i
                  </Button>
                </div>
              </Form.Group>
            </Col>
          </Row>
        </Stack>
      </Accordion.Body>
    </Accordion.Item>
  );
};
export default PassengerDetailsItem;
