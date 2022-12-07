import React, { useState } from 'react'
import styles from './sender.module.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Sender({id}) {
  // let userID = id.id.replace(/\s/g, '');
  let userID = id.id;
  console.log(userID.length);


  let content;
  let eventTextArea;
  let [Message,setMessage] = useState(null)
  async function sendMessage(){
    try {
      let{data} = await axios.post(`http://localhost:3001/api/v1/message/${userID}`,{
        messageBody: content,
      })
      console.log(data);
      setMessage(data);
      // console.log(setMessage);
    } catch (error) {
      console.log(error);
    }
    let div = document.querySelector('.hide');
      div.style.display = 'block';
    // console.log(eventTextArea);
    resetTextArae()
  }
  function handleChange(e){
    let data = e.target.value
    console.log(data);
    content = data;
    eventTextArea = e
  }
  function resetTextArae(){
    eventTextArea.target.value = ''
    setTimeout(() =>{
      let div = document.querySelector('.hide');
      div.style.display = 'none';
    },2000)
  }
  return (
    <div className={`${styles.wrapper} mt-5`}>
    <div className={`${styles.info}`}>
          <div>
            <i className={`${styles.icon} fa-solid mb-1 fa-user-secret `}></i>
          </div>
          {/* <h2 className='position-absolute bottom-0 start-50 translate-middle mb-4'>Ahmed</h2> */}
          <div className='position-absolute bottom-0 start-50 translate-middle'>
          <button className='btn btn-success' type='button'>
            <i className="fa-solid fst-italic fa-share-nodes">share</i>
            </button>
          </div>
    </div>
    <div>
      <p className='text-center fw-bold text-capitalize fst-italic fs-5'>Express or write your opinion about the personality of your friend.</p>
      {Message?<div className="alert hide alert-success text-center">{Message.message}</div>:''}
      <form>
        <textarea className='border border-radius rounded-3 form-control' onChange={handleChange} name="message" rows="15" cols="80" placeholder='Tell me about myself.'></textarea>
        <br/>
        <div className='text-end'>
          {/* <input className='btn btn-outline-warning' type="button" defaultValue='Send'/> */}
          <Link className='btn btn-outline-warning px-4' onClick={sendMessage}><i className="fa-solid fa-paper-plane"></i></Link>
        </div>
      </form>
    </div>
    <div>
    </div>
</div>
  )
}
