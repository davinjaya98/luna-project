import { useState, type FormEvent, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { register } from "../../utils/rest-api/users";
import { showToast } from "../../stores/ui";
import { navigate } from 'astro:transitions/client';
import "./register.scss"

type RegisterForm = {
  email:string,
  password:string,
  passwordConfirm:string
}

const RegisterForm = () => {
  const [form, setForm] = useState<RegisterForm>({
    email: "",
    password: "",
    passwordConfirm: ""
  });
  
  const [errorForm, setErrorForm] = useState<RegisterForm>({
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
    try {
      await register(form.email, form.password, form.passwordConfirm);
      showToast("Registration success", "success", 3000);
      navigate("/login");
    } catch (e:any) {
      const responseMessage = e.response.data.message;
      if (Array.isArray(responseMessage)) {
        const errors = { ...errorForm };
        for (let i = 0; i < responseMessage.length; i++) {
          const property = responseMessage[i].property as keyof RegisterForm;
          errors[property] = responseMessage[i].message;
        }
        setErrorForm(errors);
      } else {
        showToast(e.response.data.message, "danger", 3000);
      }
    }
  };

  return (
    <Form onSubmit={onSubmitForm} className="form d-flex flex-column">
      <Button variant="primary" className="align-self-center" href="/">
        Logo
      </Button>
      <Form.Group className="mb-3 mt-5" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control 
          onChange={(e)=>onFormInputChange("email", e.currentTarget.value)} 
          name="email" 
          type="email" 
          defaultValue={""} 
          placeholder="ex: JohnDoe@luna.com" 
          isInvalid={!!errorForm.email}
        />
        <Form.Control.Feedback type="invalid">{errorForm.email}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control 
          onChange={(e)=>onFormInputChange("password", e.currentTarget.value)} 
          type="password" 
          defaultValue={""} 
          placeholder="Password" 
          isInvalid={!!errorForm.password}
        />
        <Form.Control.Feedback type="invalid">{errorForm.password}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="passwordConfirm">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control 
          onChange={(e)=>onFormInputChange("passwordConfirm", e.currentTarget.value)}
          type="password"
          defaultValue={""} 
          placeholder="Confirm Password"
          isInvalid={!!errorForm.passwordConfirm}
        />
        <Form.Control.Feedback type="invalid">{errorForm.passwordConfirm}</Form.Control.Feedback>
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
