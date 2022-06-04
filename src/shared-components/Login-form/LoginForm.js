import React, { useState } from "react";
import "./LoginForm.css";
function LoginForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form className="">
      <div className="first-name d-flex py-2 align-items-center">
        <span className="col-md-4 input-name">First Name</span>
        <input
          type="firstName"
          class="form-control"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First name"
          name="firstName"
          required
        />
      </div>
      <div className="last-name d-flex py-2 align-items-center">
        <span className="col-md-4 input-name">Last Name</span>
        <input
          class="form-control"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last name"
          type="text"
          name="lastName"
          required
        />
      </div>
      <div className="email d-flex py-2 align-items-center">
        <span className="col-md-4 input-name">Email</span>
        <input
          class="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          type="email"
          name="email"
          required
        />
      </div>
      <div className="password d-flex py-2 align-items-center">
        <span className="col-md-4 input-name">Password</span>
        <input
          class="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          name="password"
          required
        />
      </div>
      
    </form>
  );
}
export default LoginForm;
