import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const Login = () => {
    localStorage.setItem("user", "test");
    navigate("/");
  };

  return (
    <>
      <form onSubmit={Login}>
        <h2>Private Route App</h2>
        <label htmlFor="username">Username</label>
        <input
          required
          placeholder="Enter Your Username"
          type="text"
          name="username"
          id="username"
        />
        <label htmlFor="password">Password</label>
        <input
          required
          placeholder="Enter Your Password"
          type="password"
          name="password"
          id="password"
        />
        <input type="submit" value="LOGIN" />
      </form>
    </>
  );
};

export default LoginForm;
