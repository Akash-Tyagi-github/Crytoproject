import React from "react";
import "./Homepage.css";
import backgrndimg from "../../Assets/cryptobackgroundimage.jpg";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <>
      <div
        className="homepage"
        style={{ backgroundImage: `url(${backgrndimg})` }}
      >
        <div className="headingbox">
        <h1 id="heading">
          WE TRADE <span id="clr">CRYPTO</span>
        </h1>
        <h1 id="heading">
          CURRENCY<span id="clr">.</span>
        </h1>
        <Link to="/listingpage">
        
        <button id="btn">Learn more</button>
        </Link>
        </div>
       
      </div>
    </>
  );
};

export default Homepage;
