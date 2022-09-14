import React from "react";
import "./Listingpage.css";
import bitcoinimg from "../../Assets/bitcoin1img.png";
import Secondcomp from "./Secondcomp.jsx"
import Thirdcomp from "./Thirdcomp";
const Listingpage = () => {
  return (
    <>
      <div className="listpageheading">
        <img src={bitcoinimg} style={{margin:"1.5rem",marginRight:"1.5rem",width:"4.5rem",height:"4.5rem"}} />
        <h1 id="listpageheading">Coin<span id="market">Market</span>Cap</h1>
      </div>
      <Secondcomp/>
    </>
  );
};

export default Listingpage;
