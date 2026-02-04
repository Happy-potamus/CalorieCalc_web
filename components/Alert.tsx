import React from 'react'

interface props
{
    children?:React.ReactNode
}
const Alert = (props: props) => {
  return (
    <div className= "alert alert-primary"> {props.children}</div>
  )
}

export default Alert