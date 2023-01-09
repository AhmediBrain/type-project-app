import React, { useEffect, useRef, useState } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '')

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })

        setInput('')
    }

  return (
    <div>
        <form className='todo-form' onSubmit={handleSubmit}>
            {props.edit ? (<><input type="text" 
			placeholder='Update the Item' value={input} 
            name='input' className='todo-input edit' onChange={handleChange} 
            ref={inputRef}>

            </input>

            <button className='todo-btn edit'>
                Update
            </button></>) : (<><input type="text" placeholder='Add a todo' value={input} 
            name='input' className='todo-input' onChange={handleChange} 
            ref={inputRef}>

            </input>

            <button className='todo-btn'>
                Add Todo
            </button></>)}

            
        </form>
    </div>
  )
}

export default TodoForm