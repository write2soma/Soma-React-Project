import React, { useState } from 'react'
import IconBk from '../assets/images/iconBack.jpg'
import Serimg1 from '../assets/images/icon_1.png'
import Serimg2 from '../assets/images/icon_2.png'
import Serimg3 from '../assets/images/icon_3.png'
import Serimg4 from '../assets/images/icon_4.png'

const Services = () => {
  const [listData, setListdata]=useState([
    {
      title: 'Instant Delivery',
      subtitle: 'No wait, no delay',
      img: <img src={Serimg1} alt="" />
    },
    {
      title: 'Lifetime Validity',
      subtitle: 'No recurring annual charges',
      img: <img src={Serimg2} alt="" />
    },
    {
      title: 'Value for Money',
      subtitle: 'Genuine barcodes at low prices',
      img: <img src={Serimg3} alt="" />
    },
    {
      title: 'Licensed and Unique',
      subtitle: 'Legitimate GS1-Originated numbers',
      img: <img src={Serimg4} alt="" />
    },
  ]);
  return (
    <>
      <div className="iconlistSec lazy" style={{ backgroundImage: `url(${IconBk})` }}>
        <div className="container">
          <div className="iconlistpnl">
            <div className="whiteLine">
              <div className="row">
                {listData.map(item=>{
                  return (
                    <div className="col-lg-3 col-sm-6" key={item.title}>
                      <div className="iconBx wow fadeIn" data-wow-delay="0.1s">
                        <figure>
                          {item.img}
                        </figure>
                        <h4>{item.title}</h4>
                        <span>{item.subtitle}</span>
                      </div>
                    </div>
                  )
                })}
                

              </div>
            </div>			
          </div>
        </div>
        <a href="#downSec" className="blueCircle"><span className="icon-Line-28"></span></a>
      </div>
    </>
  )
}

export default Services
