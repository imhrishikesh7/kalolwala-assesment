import React from 'react';
import Logo from '../images/k&a_logo.png'
import Mail from "../images/mail.png"
export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><img src={Logo} alt="" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 ">
            <li className="nav-item">
              <a className="nav-link hov" aria-current="page" href="/">WORK</a>
            </li>
            <li className="nav-item">
              <a className="nav-link hov" href="/">EXPERTISE</a>
            </li>
            <li className="nav-item">
              <a className="nav-link hov" href="/">ABOUT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link hov" href="/">INSIGHT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/"><button><img src={Mail} style={{width:"15px"}} alt="" /> START A PROJECT</button></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
