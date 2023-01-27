import React from "react";
import RegistrationForm from "./RegistrationFormField";
import RegistrationCard from "./RegistrationCard";
import "./Registration.css";

function Registration() {
  return (
    <div className=" regd-container">
      <div className="row container_row">
        <div className="col">
          <RegistrationCard />
        </div>
        <div className="col container_right_column">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
}

export default Registration;
