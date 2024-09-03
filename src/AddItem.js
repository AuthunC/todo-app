import React, { useRef } from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({newItem, setNewItem, handleSubmit}) => {

  //UseRef to store state in variable
  const userInput=useRef(null)

  //Function to change the focus reference to the input using ref={}
  //Then use this function in button's onclick event.
  const handleFocus=()=>{
    userInput.current.focus()
  }
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add New Item</label>
        <input 
            ref={userInput}
            type="text" 
            id='addItem'
            autoFocus
            required
            placeholder='Add New Item'
            value={newItem}
            onChange={(e)=>setNewItem(e.target.value)}
        />
        <button 
            onClick={handleFocus}
            type='submit' 
            aria-label='Add Item'
        >
            <FaPlus />
        </button>
    </form>
  )
}

export default AddItem