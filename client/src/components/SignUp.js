import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import signinImage from "../components/signup.jpg";
const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [room, setRoom] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    //post user registration data to server
    const response = await axios
      .post("http://localhost:5000/api/user/register", {
        username,
        password,
        room,
      })
      .then((response) => {
        console.log(response);
      });
    console.log(response);
    //if successful, navigate to login page
    navigate("/login");
  };
  return (
    <div>
      <div className="auth__form-container">
        <div className="auth__form-container_fields">
          <h1>Welcome To Ottonova</h1>
          <div className="auth__form-container_fields-content">
            <form onSubmit={handleSubmit}>
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
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="room">Room</label>
                <input
                  name="room"
                  type="text"
                  placeholder="room"
                  onChange={(e) => setRoom(e.target.value)}
                  required
                />
              </div>

              <div className="auth__form-container_fields-content_button">
                <button type="submit">Register</button>
              </div>
            </form>
          </div>
        </div>
        <div className="auth__form-container_image">
          <img src={signinImage} alt="sign in" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
