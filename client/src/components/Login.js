import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import signinImage from "../components/signup.jpg";

const Login = () => {
     const navigate = useNavigate();
     const [username, setUsername] = useState("");
     const [password, setPassword] = useState("");

     const handleLogin = async (e) => {
       e.preventDefault();
       //post user registration data to server
       const response = await axios
         .post("http://localhost:5000/api/user/login", {
           username,
           password
         })
         .then((response) => {
           console.log(response);
         });
       console.log(response);
       //if successful, navigate to chat page
       navigate("/chat");
     };
    return (
      <div>
        <div>
          <div className="auth__form-container">
            <div className="auth__form-container_fields">
              <div className="auth__form-container_fields-content">
                <form onSubmit={handleLogin}>
                  <div className="auth__form-container_fields-content_input">
                    <label htmlFor="username">Username</label>
                    <input
                      name="username"
                      type="text"
                      placeholder="Username"
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                      required
                    />
                  </div>

                  <div className="auth__form-container_fields-content_input">
                    <label htmlFor="password">Password</label>
                    <input
                      name="password"
                      type="password"
                      placeholder="Password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div className="auth__form-container_fields-content_button">
                    <button type="submit">Login</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="auth__form-container_image">
              <img src={signinImage} alt="sign in" />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Login
