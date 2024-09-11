import React, { useState } from 'react'
import Logo from '../assets/images/hderlogo.png'
import { NavLink } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits'
import CropFreeIcon from '@mui/icons-material/CropFree'
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices'
import GroupIcon from '@mui/icons-material/Group';
import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import CallIcon from '@mui/icons-material/Call'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const header = () => {
  const [openMenu, setOpenmenu] = useState(false);
  const mobMenu = [
    {
      text:'Home',
      link: '/',
      icon: <HomeIcon/>
    },
    {
      text:'Products',
      link: '/products',
      icon: <ProductionQuantityLimitsIcon/>
    },
    {
      text:'Services',
      link: '/services',
      icon: <MiscellaneousServicesIcon/>
    },
    {
      text:'Barcodes',
      link: '/barcodes',
      icon: <CropFreeIcon/>
    },
    {
      text:'Testimonials',
      link: '/testimonials',
      icon: <GroupIcon/>
    },
  ]
  return (
    <>
      <header className="headersec">
        <div className="hderTop">
          <div className="container">
            <div className="hdrtoprt">
              <div className="hdrtopinr">
                <ul className="hdrsocial">
                  <li><a href="#url" target="_blank"><span className="icon-facebook-logo"></span></a></li>
                  <li><a href="#url" target="_blank"><span className="icon-Vector-9"></span></a></li>
                  <li><a href="#url" target="_blank"><span className="icon-linkedin"></span></a></li>
                  <li><a href="#url" target="_blank"><span className="icon-instagram"></span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="hdrbtm">
          <div className="container">
            <div className="hderinr">
              <div className="hdrlgo">
              <NavLink to="/"><img src={Logo} alt="" /></NavLink>
              </div>
              <div className="hdrRt">
                <div className="hdrmnu">
                  <ul className="slimmenu">
                    <li className="active"><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/products">Products</NavLink></li>
                    <li><NavLink to="/services">Services</NavLink></li>
                    <li><NavLink to="/barcodes">Barcodes</NavLink></li>
                    <li><NavLink to="/testimonials">Testimonials</NavLink></li>
                  </ul>
                </div>
                <div className="hdrRtinr">
                  <a href="tel:9679755663" className="hdrCall"><span className="icon-Call"></span>9679755663</a>
                  <em>GSTIN-19AADFY4622R1ZF</em>
                </div>
              </div>


              <div className='navbar-menu-container'>
                <MenuOutlinedIcon onClick={()=>setOpenmenu(true)}/>
              </div>
              <Drawer open={openMenu} onClose={()=>setOpenmenu(false)} anchor="right">
                <Box sx={{width:300}}
                role="presentation"
                onClick={()=>setOpenmenu(false)}
                onKeyDown={()=>setOpenmenu(false)}>
                  <List className='mobMnu'>
                    {mobMenu.map((item) => (
                      <ListItem key={item.text} component={NavLink} to={item.link}>
                        <ListItemButton>
                          <ListItemIcon>{item.icon}</ListItemIcon>
                          <ListItemText primary={item.text}/>
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                  <Divider/>
                </Box>
              </Drawer>
            </div>
          </div>
        </div>	
      </header>
    </>
  )
}

export default header
