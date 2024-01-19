import { useState } from "react";
import {
  Form,
  Button,
  Row,
  Col,
  ListGroup,
  Stack,
  Image,
  Card,
} from "react-bootstrap";
import LocationDirectorLabel from "@components/label/location-director/location-director-label";
import BookingSummaryItem from "./booking-summary-item/booking-summary-item";
import NavigationButton from "@components/button/navigation/navigation-button";

import classNames from "classnames";

const BookingSummaryForm = () => {
  return (
    <>
      <Stack
        direction="horizontal"
        gap={3}
        className={classNames("p-2", "bg-warning", "mb-1")}
      >
        <Image src="./assets/alert-white.svg" />
        <p className={classNames("text-light", "m-0")}>
          Please make sure all the information is correct!
        </p>
      </Stack>
      <Row>
        <Col className="col-lg-6">
          <Stack direction="horizontal" gap={1}>
            <LocationDirectorLabel director="From" location="Batam" />
            <LocationDirectorLabel director="To" location="Singapore" />
          </Stack>
          <Stack
            direction="horizontal"
            gap={3}
            className="justify-content-start align-items-stretch text-primary"
          >
            <div className="d-flex align-items-start flex-column">
              <p className="mb-0">
                <strong>Date</strong>
              </p>
              <p className="mb-0">Thu, 10 Jul 2023</p>
            </div>
            <div className="d-flex align-items-start flex-column">
              <p className="mb-0">
                <strong>Departure - Arrival</strong>
              </p>
              <p className="mb-0">10.30 - 11.30</p>
            </div>
          </Stack>
          <ListGroup>
            <BookingSummaryItem />
          </ListGroup>
        </Col>
        <Col className="col-lg-6">
          <Stack gap={3}>
            <Card className={classNames("border-0", "bg-light")}>
              <Card.Body>
                <Card.Title className="text-primary">
                  Amount to be paid
                </Card.Title>
                <Card.Subtitle className="text-primary">
                  Batam to Malaysia
                </Card.Subtitle>
                <Row>
                  <Col className="col-lg-6">
                    <Card.Text className="text-primary">Item</Card.Text>
                  </Col>
                  <Col>
                    <Card.Text
                      className={classNames("text-primary", "text-end")}
                    >
                      Price
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className={classNames("border-0", "bg-primary")}>
              <Card.Body>
                <Card.Title className="text-light">Your Pay</Card.Title>
                <Card.Subtitle
                  className="text-light"
                  style={{ fontSize: "2.25rem" }}
                >
                  Rp 0
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Stack>
        </Col>
      </Row>
      <Stack
        direction="horizontal"
        gap={3}
        className="justify-content-between mt-3"
      >
        <NavigationButton
          href="/passenger-details"
          style={{ backgroundColor: "#EEE", color: "#0D278F" }}
        >
          <img src="./assets/arrow-left-primary.svg" alt="arrow-left-primary" />
          Back
        </NavigationButton>
        <NavigationButton>
          Continue Payment
          <img src="./assets/arrow-right-white.svg" alt="arrow-right-white" />
        </NavigationButton>
      </Stack>
    </>
  );
};

export default BookingSummaryForm;
