import axios from 'axios';
import React,{ useState , useEffect } from 'react'
import styles from './receiver.module.css'
import moment from 'moment';
import img from '../../Images/green.jpg'
export default function Receiver() {

  let [Messages , setMessages] = useState(null)

  let token = localStorage.getItem('token')
  const headers = {
    'Authorization':`Ahmed ${token}` 
  }
  async function MessageList(){
    try {
      let{data} = await axios.get(`http://localhost:3001/api/v1/message`, {
        headers: headers
      })
      console.log(data.messages);
      setMessages(data.messages)
      // setMessages(data);
      // console.log(setMessage);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    MessageList()
  },[])


  return (
<div className={`${styles.wrapper} ${styles.messages} mb-5`}>
    <div className={`${styles.info}`}>
        {/* <img className='rounded-circle' src="https://i.imgur.com/cMy8V5j.png" alt="user" width="100"/> */}
          {/* <p className='fs-5 text-muted'>Mern Stack  Developer</p> */}
          <i className={`${styles.icon} fa-solid fa-circle-user `}></i>
    </div>
    <div className={`row d-flex justify-content-center col-sm-11 col-md-10 col-lg-12 `}>
      {Messages? Messages.map((message , index)=> 
      <div className='col-md-6 col-lg-4 my-2' key={index}>
        <div className="card mb-3 d-flex justify-content-center" style ={{maxWidth:"540px"}}>
          <div className="row g-0 position-relative">
            <div className="col-md-4">
              <img src={img} className="img-fluid h-100 rounded-start" alt="..."/>
            </div>
            <div className="col-md-8 ">
              <div className="card-body">
                <h5 className="card-title text-muted fst-italic">Unknown</h5>
                <p className="card-text">{message.messageBody}</p>
                <div className='d-flex justify-content-between'>
                  <p className="card-text mb-0">
                    <span className="text-muted">{moment(message.createdAt).format('lll').replace(/,/g, '').split(' ').slice(1,2)} </span>
                    <span className="text-muted">{moment(message.createdAt).format('lll').replace(/,/g, '').split(' ').slice(0,1)}</span>
                  </p>
                  <p className="card-tex p-1 mb-0 position-absolute end-0">{<span className="text-muted">{moment(message.createdAt).format('lll').replace(/,/g, '').split(' ').slice(2,3)} </span>}</p>
                  <p className="card-text mb-0 ">{<span className="text-muted p-2 position-absolute top-0 end-0">{moment(message.createdAt).format('lll').replace(/,/g, '').split(' ').slice(3,5)} </span>}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>):''}
    </div>
    <div>
    </div>
</div>
  )
}
