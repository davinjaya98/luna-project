import { useState, type FormEvent, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { register } from "../../utils/rest-api/users";

const RegisterForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    passwordConfirm: ""
  });

  const onFormInputChange = (name:"email"|"password"|"passwordConfirm", value:string) => {
    const formToUpdate = { ...form };
    formToUpdate[name] = value;
    setForm(formToUpdate);
  };

  const onSubmitForm = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await register(form.email, form.password, form.passwordConfirm);
  };

  return (
    <Form onSubmit={onSubmitForm} className="d-flex flex-column">
      <Button variant="primary" className="align-self-center" href="/">
        Logo
      </Button>
      <Form.Group className="mb-3 mt-5" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control onChange={(e)=>onFormInputChange("email", e.currentTarget.value)} name="email" type="email" defaultValue={""} placeholder="ex: JohnDoe@luna.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={(e)=>onFormInputChange("password", e.currentTarget.value)} type="password" defaultValue={""} placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="passwordConfirm">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control onChange={(e)=>onFormInputChange("passwordConfirm", e.currentTarget.value)} type="password" defaultValue={""} placeholder="Confirm Password" />
      </Form.Group>
      <Button className="mt-5" variant="primary" type="submit">
        Register
      </Button>
      <Form.Text className="text-center mt-5">
        or you already have an account yet? <a href="/login">Login Here</a>
      </Form.Text>
    </Form>
  );
};

export default RegisterForm;
