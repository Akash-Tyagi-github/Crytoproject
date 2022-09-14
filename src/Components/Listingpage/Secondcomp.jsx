import React from "react";
import "./Secondcomp.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import coinimage from "../../Assets/bitcoin1img.png";
import { Image, Breathing, Shimmer } from "react-shimmer";
import { Spin } from "antd";
import "antd/dist/antd.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Thirdcomp from "./Thirdcomp";
import { useDispatch } from "react-redux";
import { setData } from "../../Redux/Action/dataaction";
import { useSelector } from "react-redux";
const Secondcomp = () => {
  const datafromstore=useSelector((state)=>state)
  const [resp, setResp] = useState([]);
  const [listcoins, setListcoins] = useState([]);
  const [loading, setLoading] = useState(false);

const dispatch=useDispatch();


  async function getinfo() {
    setLoading(true);
    await axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        // let data = res?.data?.splice(0, 20);
        // setResp(data);
        let listcoindata = res?.data?.splice(0, 50);
        dispatch(setData(res));
        setListcoins(listcoindata);
        // console.log("data:", data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    getinfo();
  }, []);

  const settings = {
    dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
  };
console.log("datafromstore :",datafromstore.a.data);
const reduxstore=datafromstore.a.data;
console.log("newarray:",reduxstore);
  return (
    <>
      {loading ? (
        <div id="spinner">
          <Spin size="large" />
        </div>
      ) : (
        <div>
          <div className="carousal">
            (
            <Slider {...settings}>
              {reduxstore?.map((elem, id) => {
                return (
                  <div className="customslide" key={id}>
                    <div className="item">
                      <img src={elem.image} id="coinimg" />
                      <h1 id="coindata">{elem.name}</h1>
                      <h1 id="coindata">{elem.current_price}</h1>
                    </div>
                  </div>
                );
              })}
            </Slider>
            )
          </div>
          <Thirdcomp data={listcoins} />
        </div>
      )}
    </>
  );
};

export default Secondcomp;
{
  /* <Slider {...sliderSettings}>
{coincard?.map((coincard, index) => (
  <div style={{border:"2rem solid red"}} key={index}>
    <img alt={coincard.title} src={coincard.imagesrc} width="10rem" height="10rem" />
    <h2 style={{fontSize:"2rem"}}>{coincard.title}</h2>
    <p style={{fontSize:"2rem"}}>{coincard.price}</p>
  </div>
))}
</Slider> */
}
