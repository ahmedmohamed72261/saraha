import React , {useState , useEffect} from 'react'
import styles from './profile.module.css'
import jwt_decode from 'jwt-decode';
import axios from 'axios';

export default function Profile() {
  let [details , setDetails] = useState(null);
  let token = localStorage.getItem('token');
  console.log(token);
  let decoded = jwt_decode(token);
  console.log(decoded);
  const headers = {
    'authorization':`Ahmed ${token}` 
  }
  function detailsUser(){
    let dataUser = axios.get('http://localhost:3001/api/v1/user/profile', {
      headers: headers
      })
    dataUser.then(function(result) {
      setDetails(result.data.user)
      console.log(result) // "Same User token"
      console.log(details)
    })
    // console.log(details);
  }
  useEffect(()=> {
      detailsUser()
  }, []);
  let [file , setFile] = useState(null);
  function fileSelectedHandler(e){
    console.log(e.target.files[0].name);
    setFile(e.target.files[0].name)
  }
  function fileUploadHundler(){
    console.log(headers);
    let picture = axios.patch('http://localhost:3001/api/v1/user/profile/pic', {
      headers: {
        headers
      },
      image:file
      })
      picture.then(function(result) {
        console.log(result)
      })
      console.log(picture);
  }
  return (
    <div className={`${styles.wrapper}`}>
    <div className={`${styles.left}`}>
        <img src="https://i.imgur.com/cMy8V5j.png" alt="user" width="100"/>
        {details?<h2 className='mt-3 fw-bold fst-italic'>{details.name}</h2>:''}
        <div className='d-flex'>
          <input type="file" onChange={fileSelectedHandler} />
          <button className='btn btn-outline-success' onClick={fileUploadHundler}>Upload</button>
        </div>
    </div>
    <div className={`${styles.right}`}>
        <div className={`${styles.info}`}>
            <h3>Information</h3>
            <div className={`${styles.info_data}`}>
                  <div className={`${styles.data}`}>
                    <h4>Email</h4>
                    {details?<p className='fs-5'>{details.email}</p>:''}
                  </div>
                  <div className={`${styles.data}`}>
                    <h4>Phone</h4>
                    {details?<p className='fs-5'>{details.phone}</p>:''}
              </div>
            </div>
        </div>
      
      <div className={`${styles.projects}`}>
            <h3>Info</h3>
            <div className={`${styles.projects_data}`}>
                  <div className={`${styles.data}`}>
                    <h4>Age</h4>
                    {details?<p className='fs-5'>{details.age}</p>:''}
                  </div>
                  
                  <div className={`${styles.data}`}>
                    <h4>Gender</h4>
                    {details?<p className='fs-5'>{details.gender}</p>:''}
              </div>
            </div>
        </div>
      
        <div className={`${styles.social_media}`}>
            <ul>
              <li><a href="www.facebook.com"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="www.twitter.com"><i className="fab fa-twitter"></i></a></li>
              <li><a href="http//www.instagram.com"><i className="fab fa-instagram"></i></a></li>
          </ul>
      </div>
    </div>
</div>
  )
}
