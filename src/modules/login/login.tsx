import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const LoginForm = () => {
  const [buttonIsDisabled, setButtonIsDisabled] = useState(true);
  return (
    <Form className="d-flex flex-column">
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="ex: JohnDoe@luna.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Text className="mb-3 text-end" as="a" href="/">
        forgot password?
      </Form.Text>
      <Button variant="primary" type="submit" disabled={buttonIsDisabled}>
        Login
      </Button>
      <Form.Text className="mb-3 text-center">
        or you don’t have an account yet? <a href="/register">Register Here</a>
      </Form.Text>
    </Form>
  );
};

export default LoginForm;
