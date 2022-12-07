import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from "./register.module.css";
import axios from 'axios';
// import Joi from 'joi';

export default function Register() {
  let [user , setUser] = useState({
    // firstName:'',
    // lastName:'',
    name:"",
    email:'',
    password:'',
    cPassword:'',
    phone:'',
    age:''
  })
  const navigate = useNavigate();
  function goToLogin(){
    let path = '/login';
    navigate(path)
  }
  let [loading , setLoading] = useState(false)
  let [errorMsg , setErrorMsg] = useState([]);
  async function submitFormData(e){
    e.preventDefault();
    setLoading(true);
      // alert("Submit")
      try {
        let{data} = await axios.post('http://localhost:3001/api/v1/auth/signup' , user)
      // console.log(data.err[0])
      console.log(data);
      if(data.message === 'Done'){
        console.log("Success")
        goToLogin();
      }else if (data.message === "validation error") {
          setErrorMsg(data.err[0]);
          console.log(data.err[0]);
        }
        setLoading(false);
      }catch (error) {
        console.log(error);
        setLoading(false);
        console.log(error.response.data.err[0])
        setErrorMsg(error.response.data.err)
      }
      
    
  }
  
  
  // function validationForm(){
  //   const schema = Joi.object({
  //     name:Joi.string().required().min(3),
  //     email:Joi.string().required().email({tlds:{allow:['com' , 'net']}}),
  //     password: Joi.string().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)).required()
  //   })
  //   return schema.validate(user);
  // }

  function handleChange(e){
    // console.log(e.target.value);
    let myUser = {...user};

    myUser[e.target.name] = e.target.value;
    setUser(myUser);
    // myUser.first_name = e.target.value;
    console.log(myUser);
    // myUser.last_name = e.target.value;
    // myUser.email = e.target.value;
    // myUser.password = e.target.value;
  }

  return (
    <div className={styles.signup_container}>
    <div className={styles.signup_form_container}>
      <div className={styles.left}>
        <h1>Welcome Back</h1>
        <Link to="/login">
          <button type="button" className={styles.white_btn}>
            Sing in
          </button>
        </Link>
      </div>
      <div className={styles.right}>
        <form onSubmit={submitFormData} className={`${styles.form_container}`}>
          <h1>Create Account</h1>
          {errorMsg?errorMsg.map((error, index)=><div key={index} className='alert w-100 alert-danger text-center p-2'>{error.message}</div>):''}
          {/* <div className={styles.fullName}>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={handleChange}
            required
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={handleChange}
            required
            className={styles.input}
          />
          </div> */}
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            onChange={handleChange}
            required
            className={styles.input}
          />
          <div className='text-center d-flex w-50 justify-content-center'>
          <input
            type="number"
            placeholder="Enter your Age"
            name="age"
            onChange={handleChange}
            required
            className={`${styles.input} me-4`}
          />
            <input
              type="number"
              placeholder="Enter your Phone"
              name="phone"
              onChange={handleChange}
              required
              className={`${styles.input}`}
            />
          </div>
          <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              required
              className={styles.input}
            />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            required
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="cPassword"
            onChange={handleChange}
            required
            className={styles.input}
          />
          <button type="submit" className={styles.green_btn}>
            {loading ? <i className='fa fa-spinner fa-spin'></i>: "Sing Up"}
          </button>
        </form>
      </div>
    </div>
  </div>
  )
}
