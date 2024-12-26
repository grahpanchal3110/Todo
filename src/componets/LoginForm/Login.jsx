import { useState } from "react";

const Login = () => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    e.preventDefault();

    console.log(login);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setLogin({ ...login, [name]: value });
  };
  return (
    <div>
      <form onSubmit={handleLoginChange}>
        <div className="form">
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            placeholder="username"
            name="username"
            value={login.username}
            onChange={handleInputChange}
          />

          <label htmlFor="password" className="mt-3">
            Password
          </label>
          <input
            type="text"
            placeholder="Password"
            name="password"
            value={login.password}
            onChange={handleInputChange}
            className="mt-2"
          />

          <button type="submit" className="login-btn">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
