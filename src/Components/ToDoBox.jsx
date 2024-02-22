import React from 'react'
import Header from './Header'
import '../Styles/ToDoBox.css'
import ToDoContainer from './ToDoContainer'

const ToDoBox = () => {

  return (

    <>
        <div className='todo-box border' >
             <h2 style={{color:"white"}}>TODO</h2>
            <Header/>
           
            <ToDoContainer/>

        </div>
     </>
  )
}

export default ToDoBox