import { Button, Container, Navbar, Nav } from "react-bootstrap";
import "./header.scss";

const Header = () => (
  <Nav className="py-4" as="nav">
    <Container>
      <div className="d-flex align-items-center justify-content-between">
        <Navbar.Brand href="/">
          <Button variant="primary">Logo</Button>
        </Navbar.Brand>
        <div className="d-flex gap-2">
          <Button variant="outline-secondary">Register</Button>
          <Button variant="secondary">Login</Button>
        </div>
      </div>
    </Container>
  </Nav>
);
export default Header;
