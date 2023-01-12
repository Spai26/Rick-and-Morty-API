import { useState } from "react";
import Inputs from "../partials/Inputs";
const LoginFrom = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      type: "text",
      name: "username",
      label: "Username",
      htmlFor: "username",
      placeholder: "Username",
    },
    {
      id: 2,
      type: "password",
      name: "password",
      label: "Password",
      htmlFor: "password",
      placeholder: "Password",
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
    setValues({
      username: "",
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
