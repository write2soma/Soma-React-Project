import React from 'react'
import lineEl from '../assets/images/lineElmnt.png'
import Howd from '../assets/images/howdoes.png'

const Barcodes = () => {
  return (
    <>
      <div className="howdonesSec" id="downSec">
        <div className="howdoneElmnt">
          <img src={lineEl} alt="" />
        </div>
        <div className="container">
          <div className="howdoespnl">
            <div className="media">
              <figure className="wow fadeInRight">
                <img src={Howd} alt="" />
              </figure>
              <div className="media-object wow fadeInLeft">
                <h2>HOW DOES A <span>BARCODE</span> WORK?</h2>
                <b>Barcodes may seem like mere zebra stripes on products! However, they are the unsung heroes of the modern eCommerce and retail industries. Barcodes perfectly orchestrate an intricate dance between products and scanners and make inventory management easy.</b>
                <p>At their core, barcodes are data-encoding components that translate valuable product information into a simple language readable by scanner machines. Each line and space in barcodes represents a unique narrative about a product’s identity, price, and more.</p>
                <p>The scanner illuminates the lines pasted on a barcode to decode the story within it. It’s a secret handshake between the product you are selling and the technology. From grocery stores to warehouses, barcodes can streamline operations and ensure accuracy and efficiency in inventory management, sales tracking, and beyond.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Barcodes
