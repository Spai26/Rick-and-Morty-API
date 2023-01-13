import { useState } from "react";
import { Link } from "react-router-dom";
import Inputs from "../partials/Inputs";
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
      placeholder: "Email",
      errorMessaje: "invalid or unregistered email",
      required: true,
    },
    {
      id: 2,
      type: "password",
      name: "password",
      label: "Password",
      htmlFor: "password",
      placeholder: "Password",
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
    <div>
      <form onSubmit={handleOnSubmit}>
        {inputs.map((input) => (
          <Inputs
            key={input.id}
            {...input}
            value={values[input.name]}
            errorMessaje={input.errorMessaje}
            onChange={onChange}
          />
        ))}

        <button type="submit">Enviar</button>
      </form>
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
