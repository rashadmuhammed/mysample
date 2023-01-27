import React, { Fragment } from "react";
import { homebackground } from "../../assets";
import "./style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({onLoginChange}) => {
  const [enteredEmail, setenteredEmail] = useState("");
  const [eneteredPassword, setEnteredPassword] = useState("");
  const[enteredemailwrong,setEnteredEmailWrong]=useState("");
  const navigateToHome = useNavigate();
  const nameInputChangeHandler = (event) => {
    setenteredEmail(event.target.value);
  };
  const passwordInputChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };
  const loginSubmitHandler = (event) => {
    event.preventDefault();
    console.log(enteredEmail);
    console.log(eneteredPassword);

    setenteredEmail("");
    setEnteredPassword("");
    const logincheck = JSON.parse(localStorage.getItem("dataKey"));
    console.log(logincheck)
    // console.log( logincheck.filter((e) => e.email ))
    // console.log(logincheck.filter((e) => e.confermPassword== eneteredPassword))

    // if (
    //   logincheck.filter((e) => e.email == enteredEmail).length &&
    //   logincheck.filter((e) => e.confermPassword == eneteredPassword).length
    // ) {
    //   navigateToHome("/Home");
    // }
    const user = logincheck.find(e=> e.email==enteredEmail)
    if(user){
      if(user.confermPassword === eneteredPassword){
        onLoginChange(true);
        navigateToHome("/Http");
        //pass user date 
        //recive the data from here to show home page
      }
    }else{setEnteredEmailWrong("invalid username")}
    
  };

  return (
    <Fragment>
      <div className="row home_container">
        <div className="col-6 left-container">
          <div className="left-inner-container">
            <h1>Welcome back</h1>
          </div>
        </div>

        <form onSubmit={loginSubmitHandler} className="col-6 Login_container">
          <div>
            <h2 className="login_heading">Login</h2>
            <div className="input_email">
              <label htmlFor="login_email" className="label_login">
                work email
              </label>
              <input
                onChange={nameInputChangeHandler}
                type="text"
                id="login_email"
                value={enteredEmail}
                placeholder="enter your email"
              />
              <p>{enteredemailwrong}</p>
            </div>
            <div className="input_password">
              <label htmlFor="login_password">password</label>
              <input
                onChange={passwordInputChangeHandler}
                type="password"
                id="login_password"
                placeholder="enter you password"
                value={eneteredPassword}
              />
            </div>
            <p>forgot password?</p>
            <button className="login_botton" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Login;
