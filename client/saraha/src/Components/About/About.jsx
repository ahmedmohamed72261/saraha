import React from 'react'
import styles from './about.module.css'
import img from '../../Images/Ahmed1.png'
export default function About() {
  return (
    <div className={`${styles.wrapper}`}>
    <div className={`${styles.left}`}>
        <img src={`${img}`} alt="user" width="100"/>
        <h2 className='mt-3 my-2 fw-bold fst-italic'>Ahmed Mohamed</h2>
          <p className='fs-5 text-muted'>Mern Stack  Developer</p>
    </div>
    <div className={`${styles.right}`}>
        <div className={`${styles.info}`}>
            <h3>Information</h3>
            <div className={`${styles.info_data}`}>
                  <div className={`${styles.data}`}>
                    <h4>Email</h4>
                    <p className='fs-5'>www.ahmed30920012@gmail.com</p>
                  </div>
                  <div className={`${styles.data}`}>
                    <h4>Phone</h4>
                    <p className='fs-5'>20+ 1009480722</p>
              </div>
            </div>
        </div>
      
      <div className={`${styles.projects}`}>
            <h3>Info</h3>
            <div className={`${styles.projects_data}`}>
                  <div className={`${styles.data}`}>
                    <h4>Age</h4>
                    <p className='fs-5'>21</p>
                  </div>
                  
                  <div className={`${styles.data}`}>
                    <h4>Gender</h4>
                    <p className='fs-5'>Male</p>
              </div>
            </div>
        </div>
      
        <div className={`${styles.social_media}`}>
            <ul>
              <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
          </ul>
      </div>
    </div>
</div>

  )
}
