import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import bnrimg1 from '../assets/images/bannerImage.jpg'


const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 1000
  };
  return (
    <>
    <div className="bannerSec">
      <div className="bnerPnel">
        <div className="slider slider-for">
          <Slider {...settings}>
            <div>
              <div className="bnrIMG">
                <img src={bnrimg1} alt="" />
              </div>
            </div>
            <div>
              <div className="bnrIMG">
                <img src={bnrimg1} alt="" />
              </div>
            </div>
            <div>
              <div className="bnrIMG">
                <img src={bnrimg1} alt="" />
              </div>
            </div>
          </Slider>
        </div>

      </div>
      <a href="#botomSEC" className="bnerArw"><span className="icon-Vector"></span></a>
    </div>
    </>
  )
}

export default Banner
