import React from 'react'
import FtrBk from '../assets/images/foterBack.jpg'
import Ftrlg from '../assets/images/foterLgo.png'
import Crd1 from '../assets/images/accept_card1.png'
import Crd2 from '../assets/images/accept_card2.png'
import Crd3 from '../assets/images/accept_card3.png'
import Crd4 from '../assets/images/accept_card4.png'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="foterSec" style={{ backgroundImage: `url(${FtrBk})` }}>
        <div className="container">
          <div className="foterTop">
            <div className="row">
              <div className="col-lg-4">
                <div className="fterlft wow fadeIn" data-wow-delay="0.1s">
                  <NavLink to="/" className="foterLgo"><img src={Ftrlg} alt="" /></NavLink>
                  <span><em>GSTIN-</em>19AADFY4622R1ZF</span>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="ftrlink wow fadeIn" data-wow-delay="0.2s">
                  <h3>Main Menu</h3>
                  <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/products">Products</NavLink></li>
                    <li><NavLink to="/services">Services</NavLink></li>
                    <li><NavLink to="/barcodes">Barcodes</NavLink></li>
                    <li><NavLink to="/Testimonials">Testimonials</NavLink></li>
                    <li><NavLink to="/newsletter">Newsletter</NavLink></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="ftrinfo wow fadeIn" data-wow-delay="0.3s">
                  <h3>Contact info</h3>
                  <ul>
                    <li>
                      <div className="media">
                        <span className="icon-Location"></span>
                        <div className="media-object">
                          <p>3 M.N Roy Road, Rajpur Sonarpur Municipality, Kolkata 700149</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="media">
                        <span className="icon-Vector-3"></span>
                        <div className="media-object">
                          <p><a href="mailto:hello@yesbarcode.com">hello@yesbarcode.com</a></p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="media">
                        <span className="icon-Call"></span>
                        <div className="media-object">
                          <b><a href="tel:9679755663">9679755663</a></b>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="foterBtm wow fadeInUp">
            <ul className="ftracceptCard">
              <li>We Accept</li>
              <li><img src={Crd1} alt="" /></li>
              <li><img src={Crd2} alt="" /></li>
              <li><img src={Crd3} alt="" /></li>
              <li><img src={Crd4} alt="" /></li>
            </ul>
            <div className="ftrcopy">
              <ul>
                <li><a href="#url" target="_blank"><span className="icon-facebook-logo"></span></a></li>
                <li><a href="#url" target="_blank"><span className="icon-Vector-9"></span></a></li>
                <li><a href="#url" target="_blank"><span className="icon-linkedin"></span></a></li>
                <li><a href="#url" target="_blank"><span className="icon-instagram"></span></a></li>
              </ul>
              <p>&copy; {currentYear} <NavLink to="/">Yes Barcode</NavLink>. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
