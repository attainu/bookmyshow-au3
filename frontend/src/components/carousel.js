import React from "react";
import Slider from "react-slick";
const Carousel=()=>{
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "250px",
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2500  };
  return(
    <div className="carousel">
<Slider   {...settings}>
          <div>
          <img  src="https://in.bmscdn.com/showcaseimage/eventimage/jawaani-jaaneman-29-01-2020-07-53-18-256.jpg"  alt="..."/>
          </div>
          <div>
          <img src="https://in.bmscdn.com/showcaseimage/eventimage/bad-boys-for-life-30-01-2020-12-17-41-326.jpg"  alt="..."/>
          </div>
          <div>
          <img src="https://in.bmscdn.com/showcaseimage/eventimage/malang--unleash-the-madness-05-02-2020-05-56-59-270.jpg"  alt="..."/>
          </div>
          <div>
            <img src="https://in.bmscdn.com/showcaseimage/eventimage/love-aaj-kal-13-02-2020-12-58-23-127.jpg"/>
          </div>
        </Slider>
    </div>
  )
}
export default Carousel