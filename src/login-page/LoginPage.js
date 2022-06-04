import "./LoginPage.css";
import LoginForm from "../shared-components/Login-form/LoginForm.js";
function LoginPage() {
  return (
    <div className="body ">
      <div className="display-center">
        <div className="login-form">
          <div className="header"></div>
          <span>Login</span>
          <div className="login-body">
            <LoginForm></LoginForm>
          </div>
          <div className="footer">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
