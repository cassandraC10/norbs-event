/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";
import emailIcon from "../../assets/mail.svg";
import passwordIcon from "../../assets/password.svg";
import user from '../../assets/user.svg'
import phone from '../../assets/phone.svg'
import "./authentication.css";
import Input from "../../components/reusables/Input";
import StepContainer from "./register/StepContainer";
import { useNavigate  } from "react-router-dom";
import axios from "axios";

const Registration = () => {

  let navigate = useNavigate()

  const [userInput, setUserInput] = useState({});
  const [step, setStep] = useState(1);
  const [fieldError, setFieldError] = useState({
    firstName: { message: "", error: false },
    lastName: { message: "", error: false },
    email: { message: "", error: false },
    phone: { message: "", error: false },
    password: { message: "", error: false },
    confirmPassword: { message: "", error: false },
  });
  const handleChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
    checkIfFieldIsEmpty(e);
  };
  const handleClick = () => {
     axios.post("http://localhost:5000/accounts", userInput)
        .then((data) => console.log(data))
        .catch((error) => console.log(error))
       
  };

  const checkIfFieldIsEmpty = (e) => {
    switch (e.target.name) {
      case "email":
        if (e.target.value === "") {
          setFieldError({
            ...fieldError,
            [e.target.name]: {
              message: "please enter a valid email",
              error: true,
            },
          });
        } else {
          setFieldError({
            ...fieldError,
            [e.target.name]: {
              message: "",
              error: false,
            },
          });
        }
        break;

      case "password":
        if (e.target.value === "") {
          setFieldError({
            ...fieldError,
            [e.target.name]: {
              message: "please enter a password",
              error: true,
            },
          });
        } else {
          setFieldError({
            ...fieldError,
            [e.target.name]: {
              message: "",
              error: false,
            },
          });
        }
        break;
      default:
        break;
    }
    if (e.target.value === " ") return true;
  };

 
  return (
    <div className="authenticationContainer">
      <div className="leftSide">
        <div className="leftSide_container">

          <a onClick={() => navigate ("/login")}>
            Have an account?
            <span  style={{ color: "var(--primary_green)", marginLeft: "4px" }}> sign in </span>
          </a>
          <div className="welcome-text">
            <h1>Welcome To Norbs</h1>
            <p>
              We are an event management platform, aimed at helping you
              facilitate and run a smooth event
            </p>
          </div>
          {step === 1 && (
            <StepContainer step={1} headerTitle="let us know you">
              <Input
                text="text"
                handleChange={handleChange}
                icon={user}
                label="firstName"
                fieldError={fieldError}
              />
              <Input
                text="text"
                handleChange={handleChange}
                icon={user}
                label="lastName"
                fieldError={fieldError}
              />
              <Input
                text="text"
                handleChange={handleChange}
                icon={emailIcon}
                label="email"
                fieldError={fieldError}
              />
            </StepContainer>
          )}

          {step === 2 && (
            <StepContainer step={2} headerTitle="let's Secure Your Details">
              <Input
                text="text"
                handleChange={handleChange}
                icon={phone}
                label="phone"
                fieldError={fieldError}
              />
              <Input
                text="text"
                handleChange={handleChange}
                icon={passwordIcon}
                label="password"
                fieldError={fieldError}
              />
              <Input
                text="text"
                handleChange={handleChange}
                icon={emailIcon}
                label="confirmPassword"
                fieldError={fieldError}
              />
            </StepContainer>
          )}

          {step === 1 && (
            <button
              onClick={() => setStep(2)}
              style={{ width: "65%" }}
              className="authentication-button"
            >
              Next Step
            </button>
          )}

          {step === 2 && (
            <div
              onClick={() => setStep(1)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "65%",
              }}
            >
              <button
                style={{ width: "45%" }}
                className="authentication-button-alternate"
              >
                Go Back
              </button>
              <button
                style={{ width: "45%" }}
                className="authentication-button"
                onClick={handleClick}
              >
                Register
              </button>
            </div>
          )}

          <div className="social-media">
            <a>
              <div className="social-media-icon"></div>
            </a>
          </div>
        </div>
      </div>
      <div className="rightSide"></div>
    </div>
  );
};

export default Registration;
