import React from 'react'
import ProImg from '../assets/images/productImg.jpg'
import { NavLink } from 'react-router-dom'

const Products = () => {
  return (
    <>
    <div className="productSec" id="botomSEC">
      <div className="hderborder">
        <div className="container">
          <div className="bodyLne">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="productpnl">
          <div className="productCon wow fadeInRight">
            <h1>Our Products</h1>
            <p>EAN-13 (GTIN-13) - It is a commonly used barcode category for retail products in India and globally. This 13-digit code uniquely identifies a product and ensures seamless scanning at checkout counters. </p>
          </div>
          <div className="productRt wow fadeInLeft">
            <figure>
              <img src={ProImg} alt="" />
            </figure>
            <div className="productRtCon">
              <h3>Retails & Ecommerce</h3>
              <NavLink to="/products"  className="defultBtn"><i className="icon-Arrow-2"></i><span>EAN-13 Barcodes</span></NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Products
