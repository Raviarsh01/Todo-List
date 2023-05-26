import React from 'react'
import '../Styles/ItemDelete.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
const ItemDelete = (props) => {
 
  return (
    <>
    <div className='todo-style'>
    <FontAwesomeIcon className='button-2' icon={faXmark} 
      onClick={()=>{
        props.onSelect(props.id)
        }}/>
      <li>{props.text}</li>
      
    </div>
    </>
  )
}

export default ItemDelete