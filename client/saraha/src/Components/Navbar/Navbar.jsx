import React from 'react'
import { Link } from 'react-router-dom'
import style from './navbar.module.css';
export default function Navbar({loginData , details , logOut}) {
  return (
      <nav className={`navbar navbar-expand-lg fixed-top ${style.navColor} text-center w-100`}>
        <div className="container-fluid">
          <div>
            <Link className={`fs-2 ms-5`} to="/"><i className={`${style.logoHover} fa-regular fa-xl  fa-envelope`}></i></Link>
            {/* <i class="fa-solid fa-xl text-white fa-envelope"></i> */}
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse   fw-bolder fs-5 navbar-collapse" id="navbarSupportedContent">
          {loginData?(
                      <ul className="navbar-nav ms-auto  me-5 w-50 d-flex justify-content-evenly">
                      {/* <li className={` nav-item  `}>
                        <Link className={`${style.hoverLink} nav-link active `}  aria-current="page" to="home">Home</Link>
                      </li> */}
                      <li className={`nav-item`}>
                        <Link className={`${style.hoverLink} nav-link`}  aria-current="page" to="sender">Sender</Link>
                      </li>
                      <li className={` nav-item`}>
                        <Link className={`${style.hoverLink} nav-link`} aria-current="page" to="receiver">Receiver</Link>
                      </li>
                      <li className={` nav-item`}>
                        <Link  className={` ${style.hoverLink} nav-link`} aria-current="page" to="profile">Profile</Link>
                      </li>
                      <li className={` nav-item`}>
                        <Link className={`${style.hoverLink} nav-link`} aria-current="page" to="about">About</Link>
                      </li>
                    </ul>  
          ):''}
            <div className={`${style.socialLink} ms-auto text-white`}>
                <i className={`${style.icon1} fa-brands fa-facebook fa-md me-3`}></i>
                <i className={`fa-brands fa-instagram fa-md me-3 ${style.icon2}`}></i>
                <i className={`${style.icon3} fa-brands fa-twitter fa-md me-3`}></i>
                <i className={`fa-brands fa-youtube fa-md me-3 ${style.icon4}`}></i>
            </div>
            <ul className='list-unstyled d-flex m-0 '>
            {details?<h4 className='m-auto me-2 text-white fst-italic'><Link className={`nav-link me-3`} aria-current="page" to="profile"><i className="fa-solid fa-user"></i></Link></h4>:''}
            {/* {details?<h4 className='m-auto me-2 text-white fst-italic position-relative '> Hello: {details.name.split(' ')[0]}</h4>:''} */}
                  {!loginData?(
                    <>
                      <li className='nav-item '>
                        <button className='btn btn-outline-success'>
                          <Link className={`${style.navStyle1}`} aria-current="page" to="signup">Register</Link>
                        </button>
                      </li>
                      <li className='nav-item mx-3 '>
                        <button className='btn btn-outline-success'>
                          <Link className={`${style.navStyle1}`} aria-current="page" to="login">Login</Link>
                        </button>
                      </li>
                    </>
                  ):
                  <li className='nav-item'>
                  <button className='btn btn-outline-success'>
                    <a className={`${style.navStyle2}`} aria-current="page" onClick={logOut}>Log Out</a>
                  </button>
                </li>}
            </ul>
          </div>
        </div>
      </nav>
  )
}



