import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import LocationDirectorLabel from "@components/form/location-director-label";
import CircleButton from "@components/button/circle/circle-button";
import ScheduleItem from "@components/form/schedule-item/schedule-item";

import "./schedule.scss";

const SchedulePicker = () => {
  return (
    <Form action="/schedule" method="get">
      <div>
        <LocationDirectorLabel director="From" location="Batam" />{" "}
        <LocationDirectorLabel director="To" location="Singapore" />
      </div>
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
      <Row>
        <Col>
          <ScheduleItem />
        </Col>
      </Row>
    </Form>
  );
};

export default SchedulePicker;
