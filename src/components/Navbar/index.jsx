import { Link } from "react-router-dom";
import { logo } from "../../assets";
import "./Navbar.css";
import { useNavigate,useLocation} from "react-router-dom";

const Navbar = ({ onLoginChange }) => {
  const loginToRegister=useNavigate()
  const registerToLogin=useNavigate()

  const lgToRgNavigateHandler=()=>{
    loginToRegister("/registration")
  }
  const rgToLgNavigateHandler=()=>{
    onLoginChange(false);
    registerToLogin("/")
  }
  const location=useLocation()
  console.log(location)
  return (
    <>
      <div className="navbar_container">
        <div className="main_nav_logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="navbar_link">
          <ul className="list">
            <Link to="/Home" className="link"><li> Home</li></Link>
            <Link to="/solution" className="link"> <li> Solution</li></Link>
            <Link to="/casestudies" className="link"><li>Case studies</li></Link>
            <Link to="/blog" className="link"> <li>Blog</li></Link>
            <Link to="/price" className="link"><li>Pricing</li></Link>
          </ul>
        </div>

        {location.pathname.toLowerCase() === "/http" && <button onClick={rgToLgNavigateHandler}className="nav_reg_button">Logout</button>}
        {location.pathname.toLowerCase() === "/" && <button onClick={lgToRgNavigateHandler}className="nav_reg_button">Register</button>}
        {location.pathname.toLowerCase() === "/registration" && <button onClick={rgToLgNavigateHandler}className="nav_reg_button">Login</button>}
      </div>
    </>
  );
};

export default Navbar;
 