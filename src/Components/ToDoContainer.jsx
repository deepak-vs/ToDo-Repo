import React,{useState,useEffect} from 'react'
import "../Styles/ToDoContainer.css"
import ToDo from './ToDo'

const ToDoContainer = () => {

  const [data,setData]=useState([]);

  const getDataFromLocal=()=>{
    const dataArr=JSON.parse(localStorage.getItem("DataArr"));

    if(dataArr!==null){
      setData(dataArr)
    };
  }

  const completeAll=()=>{
    let data=JSON.parse(localStorage.getItem("DataArr"));
    console.log(data)
    data.map((obj)=>{
      obj.completed=true;
    })
    localStorage.setItem("DataArr",JSON.stringify(data))
  }


  const deleteAll=()=>{
    let confirmation=confirm("Confirm to Delete All Todos !")
    if(confirmation){
      localStorage.setItem("DataArr",JSON.stringify([]))
    }
  }

  
  useEffect(()=>{
    
    getDataFromLocal();

    const handleLocalStorageChange = () => {
      getDataFromLocal();
    };

    window.addEventListener('storage',handleLocalStorageChange);

    return () => {
      window.removeEventListener('storage', handleLocalStorageChange);
    };
  })



  if(data.length===0){
    return <h5 className='my-5'>No Record !!</h5>
  }

  return (
    <>

<div className=' my-2' style={{justifyContent:"space-evenly"}}>
              <button className='color-green mx-2' onClick={completeAll}>Complete All</button>
              <button className='color-red mx-2 my-1' onClick={deleteAll}>Delete All</button>
            </div>
    
    <div className='header border container'>
       {data.map((obj,index)=>{
          return <ToDo key={index} data={data} completed={obj.completed} id={obj.todoId} title={obj.title} description={obj.desc} isEdited={obj.isEdited}/>
       })}
          
        
         
        
    </div>
    </>
  )
}

export default ToDoContainer