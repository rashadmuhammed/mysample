import React from "react";
import "./RegistrationCard.css";
import { reg1,reg2 } from "../../assets";

function RegistrationCard() {
  return (
    <div className="left-regcontainer">
      <div className="left-inner-regcontainer">
        <h1 className="card_head1">Pay <span className="reg_h1_fn">as you </span>Hire</h1>
        <h3>we don't change your hiring needs are NOT fulfilled.</h3>
        <hr className="card_break_line"></hr>
        <h3 className="card_head3">Yow will get to try</h3>
        <div className="reg_card1">
          <img className="reg_card1_img1" src={reg2}alt="regimg1"></img>
          <h6>The best al-powered recruitment platform that helps you hire the right talent in the shortest time</h6>
          
        </div>
        <div className="reg_card2">
          <img className="reg_card2_img2" src={reg1} alt="regimg2"></img>
          <h6>the platform to manage multiple accounts,jobs,panel and candidate along with mananging the entire interview lifecycle with case</h6>
          
        </div>
      </div>
    </div>
  );
}

export default RegistrationCard;
