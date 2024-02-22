import React, { useState } from 'react'
import "../Styles/ToDo.css"
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";


const ToDo = ({id,title,description,completed,data,isEdited}) => {

 const completeTask=()=>{
  
  data.forEach((obj)=>{
    if(obj.todoId===id){
      obj.completed=true;
        }
      })
      localStorage.setItem("DataArr",JSON.stringify(data))
 } 


 const deleteTask=(e)=>{
    let confirmation=confirm("Are you sure to Delete task ? ");
    if(confirmation){  
         
    let data=JSON.parse(localStorage.getItem("DataArr"));

    let newData=data.filter((ele)=>{
        return ele.todoId!==id;
    })

    localStorage.setItem("DataArr",JSON.stringify(newData));
    }
 
 }

 const editTask=()=>{
    if(!completed){
      
      let newDescription=prompt("Edit Description",description);
      
      if(newDescription!=='' &&  newDescription!==description){

        let data=JSON.parse(localStorage.getItem("DataArr"));
        data.forEach((obj)=>{
          if(obj.todoId===id){
            obj.desc=newDescription,
            obj.isEdited=true;
          }
        })
        localStorage.setItem("DataArr",JSON.stringify(data));

      }
    }
}  




  return (
    <>
  
    <div className='to-do'>
        <div className='todo-info '>

            <h2 id="todoTitleId" className='todoTitle' style={{margin:"1px",float:"left",textDecoration:completed?"line-through":"",opacity:completed?"0.5":""}}>{title}{isEdited?<span class="badge text-bg-success editBadge">edited</span>:""}</h2>

            <p className='para' style={{margin:"1px",textDecoration:completed?"line-through":"",opacity:completed?"0.5":""}}>{description}</p>

        </div>
        <div className='todo-buttons '>

            <FaCheckCircle className='icons completeIcon' style={{color:completed?"rgb(0, 168, 53)":""}} onClick={completeTask}/>

            <FiEdit style={{opacity:completed?"0.2":""}} className='icons edit'  onClick={editTask}/>
        

       
            <MdDelete className='icons deleteIcon' onClick={deleteTask} />
            
        </div>

    </div>
    </>
  )
}

export default ToDo