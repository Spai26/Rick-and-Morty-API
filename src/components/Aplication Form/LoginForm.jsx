import { useState } from "react";
import Inputs from "../partials/Inputs";

import login_logo from "../../assets/login_logo.png";
import styled from "./LoginForm.module.css";

const LoginFrom = (props) => {
  const { login } = props;
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      type: "email",
      name: "email",
      label: "Email",
      htmlFor: "email",
      placeholder: "example@anymore.com",
      errorMessaje: "invalid or unregistered email",
      required: true,
    },
    {
      id: 2,
      type: "password",
      name: "password",
      label: "Password",
      htmlFor: "password",
      placeholder: "",
      errorMessaje: "Invalid password",
      required: true,
    },
  ];
  //restructuring event
  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
      //propiedad  : value
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    login(values);
    setValues({
      email: "",
      password: "",
    });
    console.log(values);
  };

  return (
    <div className="container__login">
      <div className={styled.login__content}>
        <div className={styled.login__image}>
          <img src={login_logo} alt="" />
        </div>
        <div className={styled.main__login}>
          <div className={styled.login__header}>
            <h1>Welcome to aplication </h1>
          </div>

          <form onSubmit={handleOnSubmit} className={styled.login__form}>
            {inputs.map((input) => (
              <Inputs
                key={input.id}
                {...input}
                value={values[input.name]}
                errorMessaje={input.errorMessaje}
                onChange={onChange}
              />
            ))}

            <button type="submit">Sign in</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginFrom;
/* { <label htmlFor="username">Username : </label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={values.username}
          onChange={handleInputChange}
        />
        <label htmlFor="password">Password : </label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleInputChange}
        />
        <button type="submit">Sing in</button>} */
