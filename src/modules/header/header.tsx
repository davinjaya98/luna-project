import { Button, Container, Navbar, Nav } from "react-bootstrap";
import "./header.scss";
import { useAuth } from "@contexts/auth-context";
import Bell from "@assets/bell.svg?react";
import Logout from "@assets/log-out.svg?react";

const Header = () => {
  const { isAuthenticated } = useAuth();
  return (
    <Nav className="py-4" as="nav">
      <Container>
        <div className="d-flex align-items-center justify-content-between">
          <Navbar.Brand href="/">
            <Button variant="primary">Logo</Button>
          </Navbar.Brand>
          <div className="d-flex gap-2">
            {
              isAuthenticated ? (
                <>
                  <Button variant="outline-secondary" href="/register">
                    <Bell />
                  </Button>
                  <Button variant="secondary" href="/login">
                    <Logout />
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline-secondary" href="/register">
                    Register
                  </Button>
                  <Button variant="secondary" href="/login">
                    Login
                  </Button>
                </>
              )
            }
          </div>
        </div>
      </Container>
    </Nav>
  );
};
export default Header;
