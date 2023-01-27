import React from "react";
import "./RegistrationForm.css";
import { useState } from "react";

function RegistrationForm() {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredSecondName, setEnteredSecondName] = useState("");
  const [enteredCompanyName, setEnteredCompanyName] = useState("");
  const [enteredemail, setEnteredemail] = useState("");
  const [enteredMobileNumber, setEnteredMobileNumber] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredconfermPassword, setEnteredconfermPassword] = useState("");

  const firstNamechangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
  };
  const secondNamechangeHandler = (event) => {
    setEnteredSecondName(event.target.value);
  };
  const companychangeNameHandler = (event) => {
    setEnteredCompanyName(event.target.value);
  };
  const emailchangeHandler = (event) => {
    setEnteredemail(event.target.value);
  };
  const numberchangeHandler = (event) => {
    setEnteredMobileNumber(event.target.value);
  };
  const passwordchangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };
  const confirmpasswordchangeHandler = (event) => {
    setEnteredconfermPassword(event.target.value);
  };
  const regformsubmithandler = (event) => {
    event.preventDefault();
    let reciveddata = [];
    if(JSON.parse(localStorage.getItem("dataKey"))) {
      reciveddata=JSON.parse(localStorage.getItem("dataKey"));

    }
    console.log(reciveddata)
    let user = {
      firstName: enteredFirstName,
      secondName: enteredSecondName,
      companyname: enteredCompanyName,
      email: enteredemail,
      mobile: enteredMobileNumber,
      password: enteredPassword,
      confermPassword: enteredconfermPassword,
    };

    reciveddata.push(user);
    localStorage.setItem("dataKey", JSON.stringify(reciveddata));
    console.log(
      enteredCompanyName,
      enteredFirstName,
      enteredMobileNumber,
      enteredPassword,
      enteredSecondName,
      enteredconfermPassword,
      enteredemail
    );
    setEnteredFirstName("");
    setEnteredSecondName("");
    setEnteredCompanyName("");
    setEnteredemail("");
    setEnteredMobileNumber("");
    setEnteredPassword("");
    setEnteredconfermPassword("");
  };

  return (
    <>
      <div className="container form_container">
        <form onSubmit={regformsubmithandler}>
          <div className="card-body p-md-5 text-black">
            <h3 className="mb-5 text-uppercase"> register</h3>

            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="form-outline">
                  <label className="form-label" htmlFor="form3Example1m">
                    First name
                  </label>
                  <input
                    onChange={firstNamechangeHandler}
                    type="text"
                    id="form3Example1m"
                    className="form-control form-control-lg"
                    value={enteredFirstName}
                  />
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="form-outline">
                  <label className="form-label" htmlFor="form3Example1n">
                    Last name
                  </label>
                  <input
                    onChange={secondNamechangeHandler}
                    type="text"
                    id="form3Example1n"
                    className="form-control form-control-lg"
                    value={enteredSecondName}
                  />
                </div>
              </div>
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form3Example8">
                Company Name
              </label>
              <input
                onChange={companychangeNameHandler}
                type="text"
                id="form3Example8"
                className="form-control form-control-lg"
                value={enteredCompanyName}
              />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form3Examplek">
                Work email
              </label>
              <input
                onChange={emailchangeHandler}
                type="text"
                id="form3Examplek"
                className="form-control form-control-lg"
                value={enteredemail}
              />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form3Examplej">
                Mobile number
              </label>
              <input
                onChange={numberchangeHandler}
                type="number"
                id="form3Examplej"
                className="form-control form-control-lg"
                value={enteredMobileNumber}
              />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form3Exampleh">
                Password
              </label>
              <input
                onChange={passwordchangeHandler}
                type="password"
                id="form3Exampleh"
                className="form-control form-control-lg"
                value={enteredPassword}
              />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form3Examplei">
                {" "}
                confirm Password
              </label>
              <input
                onChange={confirmpasswordchangeHandler}
                type="password"
                id="form3Examplei"
                className="form-control form-control-lg"
                value={enteredconfermPassword}
              />
            </div>

            <h6>
              By registering you agree to our terms of servive & pivacy policy
            </h6>
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-success btn-block btn-lg gradient-custom-4  reg_button"
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default RegistrationForm;
