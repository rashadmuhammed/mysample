import "./App.css";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Registration from "../src/components/registration/Registration";
import Home from "./components/Home/Home";
import Protected from "./components/Protected/Protected";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./components/Error/Error";
import Blog from "./components/Blog/Blog";
import Solution from "./components/Solution/Solution";
import CaseStudies from "./components/Casestudies/CaseStudies";
import Pricing from "./components/Pricing/Pricing";
import Form from "./components/Form";


import Http from "./components/Http";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("isLoggedIn")) || false
  );

  const loginHandler = (e) => {
    setIsLoggedIn(e);
    localStorage.setItem("isLoggedIn", e);
  };
  return (
    // <Router>
    //   <Navbar onLoginChange={loginHandler} />
    //   <Routes>
    //     <Route path="/" element={<Login onLoginChange={loginHandler} />} />
    //     <Route path="/registration" element={<Registration />} />
    //     <Route path="/Home" element={<Home />} />
    //     <Route path="*" element={<Error />} />
    //       <Route path="/blog" element={<Blog/>} />
    //     <Route path="/solution" element={<Solution/>} />
    //     <Route path="/casestudies" element={<CaseStudies/>} />
    //     <Route path="/price" element={ <Protected isLoggedIn={isLoggedIn}><Pricing/></Protected>} />

    //     <Route
    //       path="/Http"
    //       element={
    //         <Protected isLoggedIn={isLoggedIn}>
    //           <Http />
    //         </Protected>
    //       }
    //     />
      
    //   </Routes>
    // </Router>
    <Form/>
  );
}

export default App;
