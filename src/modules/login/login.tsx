import { useState, type FormEvent } from "react";
import { Form, Button } from "react-bootstrap";
import { login } from "@utils/rest-api/auth";
import { authenticate } from "src/stores/auth";
import "./login.scss";
import { navigate } from 'astro:transitions/client';

const LoginForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const onFormInputChange = (name:"email"|"password", value:string) => {
    const formToUpdate = { ...form };
    formToUpdate[name] = value;
    setForm(formToUpdate);
  };

  const onSubmitForm = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await login(form.email, form.password);
    const token = res.data.data.token;
    localStorage.setItem("access_token", token);
    authenticate();
    navigate("/");
  };

  return (
    <Form onSubmit={onSubmitForm} action="/auth/login" method="post" className="form d-flex flex-column">
      <Button variant="primary" className="align-self-center" href="/">
        Logo
      </Button>
      <Form.Group className="mb-3 mt-5" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control onChange={(e)=>onFormInputChange("email", e.currentTarget.value)} name="email" type="email" value={form.email} placeholder="ex: JohnDoe@luna.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={(e)=>onFormInputChange("password", e.currentTarget.value)} name="password" type="password" value={form.password} placeholder="Password" />
      </Form.Group>
      <Form.Text className="mb-3 text-end" as="a" href="/">
        forgot password?
      </Form.Text>
      <Button className="mt-5" variant="primary" type="submit">
        Login
      </Button>
      <Form.Text className="text-center mt-5">
        or you don’t have an account yet? <a href="/register">Register Here</a>
      </Form.Text>
    </Form>
  );
};

export default LoginForm;
