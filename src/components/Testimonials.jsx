import React from 'react'
import TestBk from '../assets/images/testmonialBack.jpg'
import Ppl1 from '../assets/images/people1.jpg'
import Ppl2 from '../assets/images/people2.jpg'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';


const Testimonials = () => {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 1000, 
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 2
      }
    }
  };
  return (
    <>
      <div className="testmonialSec lazy" style={{ backgroundImage: `url(${TestBk})` }} >
        <div className="container">
          <div className="testmoHed">
            <h3>Testimonials</h3>
          </div>
          <div className="testmosldr wow fadeInUp">

            <OwlCarousel className="owl-theme" {...options}>
              <div className="item">
                <div className="testmoBx">
                  <figure>
                    <img src={Ppl1} alt="" />
                  </figure>
                  <p>Vivamus tristique, orci vitae faucibus consequat, nunc lorem accumsan arcu, id faucibus magna erat varius lorem. Praesent porta interdum tortor eu volutpat. Fusce in maximus elit. Aliquam erat volutpat.</p>
                  <h5>Nicole Perkins</h5>
                </div>
              </div>
              <div className="item">
                <div className="testmoBx">
                  <figure>
                    <img src={Ppl2} alt="" />
                  </figure>
                  <p>Vivamus tristique, orci vitae faucibus consequat, nunc lorem accumsan arcu, id faucibus magna erat varius lorem. Praesent porta interdum tortor eu volutpat. Fusce in maximus elit. Aliquam erat volutpat. </p>
                  <h5>Jaidan John</h5>
                </div>
              </div>
            </OwlCarousel>
 
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonials
