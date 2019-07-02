import React, { useState } from 'react';
import IMAGES from '../assets/images';

const { LOGO, USER, Message } = IMAGES;

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header>
      <div className="hdr_lft"> 
            <div className="logo">
              <img src={LOGO} alt="logo"/>
                <span className="profile_detail desktop_none">
                      <div className="user_img">
                        <a href=""><img src={USER} alt="user"/></a>
                      </div>
                      <div className={`dropdown ${isOpen && 'open'}`}>
                        <button className="btn cstm_dropdown dropdown-toggle" type="button" data-toggle="dropdown">Jerry
                        <i className="fa fa-angle-down cstm_angle" aria-hidden="true"></i></button>
                        <ul className="dropdown-menu">
                          <li><a href="#">HTML</a></li>
                          <li><a href="#">CSS</a></li>
                          <li><a href="#">JavaScript</a></li>
                        </ul>
                      </div>
                  </span>
              <i className="fa fa-bars toggle_bar" aria-hidden="true"></i>
            </div>

          <ul className="menu">
              <li className="active"><a href="">Dashboard</a></li>
              <li><a href="">Media Manager <i className="fa fa-caret-down" aria-hidden="true"></i></a></li>
              <li><a href="">Clients</a></li>
              <li ><a  href="" className="new_pitch_btn">New Pitch</a></li>
          </ul>
      </div>

      <div className="hdr_rgt">
          <a href=""><img className="msg_icn" src={Message}/></a>
          
          <span className="profile_detail">
              <div className="user_img">
                <a href=""><img src={USER}/></a>
              </div>
              <div className={`dropdown ${isOpen && 'open'}`}>
                <button className="btn cstm_dropdown dropdown-toggle" type="button" data-toggle="dropdown" onClick={()=>setOpen(!isOpen)}>Jerry
                <i className="fa fa-angle-down cstm_angle" aria-hidden="true"></i></button>
                <ul className="dropdown-menu">
                  <li><a href="#">HTML</a></li>
                  <li><a href="#">CSS</a></li>
                  <li><a href="#">JavaScript</a></li>
                </ul>
              </div>
          </span>

      </div>
    </header>
  )
}

export default Header
