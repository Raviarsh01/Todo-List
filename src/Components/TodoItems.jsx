import React, { useState } from 'react'
import ItemDelete from './ItemDelete'
import '../Styles/todoItems.css'

const TodoItems = () => {
    const [inputList, setInputList] = useState();
    const[Items,setItems] = useState([]);
    const itemEvent=(event)=>{
        setInputList(event.target.value)
    };
    const listOfItems=()=>{
       setItems((oldItems)=>{
        return [...oldItems, inputList];
       });
       setInputList('')
    };
    const deleteItems=(id)=>{
      setItems((oldItems)=>{
        return oldItems.filter((arrElem , index)=>{
          return index !== id;
        })
      })
    }
  return (
      <>
      <div className='main-div'>
        <div className="center-div">
            <br/>
            <h1>ToDo List</h1><br/>

            <input type="text"  placeholder="Add a Items" 
            onChange={itemEvent}
            value={inputList}
            />
            <button className='button-1' onClick={listOfItems}>+</button>

            <ol>
                 {Items.map((itemval,index)=>{
                    return <ItemDelete key={index} id={index} onSelect={deleteItems} text={itemval}/>
                    
                 })} 
            </ol>
        </div>
      </div>
      </>  

  )
}   

export default TodoItems;