import React from 'react'

const Button = ({content,color,work }) => {

  
  return (
    <>
    <button style={{marginTop:"20px"}} onClick={work} className={`${color}`}>{content}</button>
    
    </>
  )
}

export default Button


