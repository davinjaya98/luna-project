import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import LocationDirectorLabel from "@components/form/location-director-label";
import CircleButton from "@components/button/circle/circle-button";
import ScheduleItem from "@components/form/schedule-item/schedule-item";

const SchedulePicker = () => {
  return (
    <Form action="/schedule" method="get">
      <Container>
        <LocationDirectorLabel director="From" location="Batam" />{" "}
        <LocationDirectorLabel director="To" location="Singapore" />
      </Container>
      <Pagination>
        <Pagination.Prev />
        <Pagination.Item>{5}</Pagination.Item>
        <Pagination.Item>{6}</Pagination.Item>
        <Pagination.Item active>{7}</Pagination.Item>
        <Pagination.Item>{8}</Pagination.Item>
        <Pagination.Item disabled>{9}</Pagination.Item>
        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item>{14}</Pagination.Item>
        <Pagination.Item>{15}</Pagination.Item>
        <Pagination.Next />
      </Pagination>
      <Container>
        <Row>
          <Col>
            <ScheduleItem />
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

export default SchedulePicker;
