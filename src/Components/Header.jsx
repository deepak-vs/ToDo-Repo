import React, { useEffect, useState,useRef } from 'react'
import '../Styles/Header.css'
import Button from './Button'

import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {

  const [title,setTitle]=useState("");
  const [desc,setDesc]=useState("");
  const todoId=useRef(0);


  
  const [data,setData]=useState([]);

  const notify = (message) => toast.error(message);

  const showData=()=>{
      if(title==='' || desc==='' ){
          notify("Please enter some data !");
          return ;
      }
      const myDataOb={
        todoId:todoId.current,
        title,
        desc,
        completed:false,
        isEdited:false
       } 
       data.push(myDataOb);
       localStorage.setItem("DataArr",JSON.stringify(data));
       setTitle("");setDesc("");
       console.log(todoId.current);
       todoId.current+=1;
       console.log(todoId.current);

     
  }
  
  
  useEffect(()=>{
    if(localStorage.getItem("DataArr")!==null){
      setData((JSON.parse(localStorage.getItem("DataArr"))))
      todoId.current=JSON.parse(localStorage.getItem("DataArr")).length;
    }
})



  return (
    <>
        <div className='header border'>
            <div className='title-desc'>
                    <div className='fields'>
                    <label style={{float:"left",marginLeft:"10px"}} htmlFor="titleId">Title</label><br/>
                    <input value={title}  onChange={(e)=>{setTitle(e.target.value)}} type="text" id='titleId' />
                    </div>

                    <div className='fields'>
                    <label style={{float:"left",marginLeft:"10px"}} htmlFor="descId">Description</label><br/>
                    <input value={desc} onChange={(e)=>{setDesc(e.target.value)}} type="text" id='descId' />
                    </div>
            </div>
            <Button content="Add Task" color="black" work={showData}/>
        </div> 
    </>
  ) 
}

export default Header