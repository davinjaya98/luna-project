import { Row, Container, Col } from "react-bootstrap";
import "./footer.scss";

const Footer = () => (
  <footer className="bg-primary text-white py-4">
    <Container>
      <Row>
        <Col>
          <p className="font-base-sm mb-0">PT. Luna Global Travelindo</p>
          <p className="font-base-xs mb-0">All Rights Reserved</p>
        </Col>
        <Col className="d-flex justify-content-end">
          <span className="font-base-xs">
            Become an Agent?{" "}
            <a href="#" className="text-white">
              Click Here
            </a>
          </span>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
