import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const LoginForm = () => {
  const [buttonIsDisabled, setButtonIsDisabled] = useState(true);
  return (
    <Form className="d-flex flex-column" style={{ width:"20rem" }}>
      <Button variant="primary" className="align-self-center" href="/">
        Logo
      </Button>
      <Form.Group className="mb-3 mt-5" controlId="email">
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
      <Button className="mt-5" variant="primary" type="submit" disabled={buttonIsDisabled}>
        Login
      </Button>
      <Form.Text className="text-center mt-5">
        or you don’t have an account yet? <a href="/register">Register Here</a>
      </Form.Text>
    </Form>
  );
};

export default LoginForm;
