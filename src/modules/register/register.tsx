import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const RegisterForm = () => {
  const [buttonIsDisabled, setButtonIsDisabled] = useState(true);
  return (
    <Form className="d-flex flex-column">
      <Button variant="primary" className="align-self-center" href="/">
        Logo
      </Button>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="ex: JohnDoe@luna.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="confirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={buttonIsDisabled}>
        Register
      </Button>
      <Form.Text className="mb-3 text-center">
        or you already have an account yet? <a href="/login">Login Here</a>
      </Form.Text>
    </Form>
  );
};

export default RegisterForm;
