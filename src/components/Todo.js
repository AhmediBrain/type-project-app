import React, { useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import TodoForm from './TodoForm'
//40 minutes

function Todo({todos, completeTodo, removeTodo, updateTodo}) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  })

  const submitUpdate = value => {
    updateTodo(edit.id, value)
    setEdit({
      id: null,
      value: ''
    })
  }
  
  if(edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate}></TodoForm>
  }

  return (
    <div>
      {todos.map((todo, index) => {
        return (
          <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
          key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
              {todo.text}
            </div>

            <div className='icons'>
              <RiCloseCircleLine 
              onClick={() => removeTodo(todo.id)} 
              className='delete-icon'></RiCloseCircleLine>
              <TiEdit onClick={() => setEdit({id: todo.id, value: todo.text})} 
              className='edit-icon'></TiEdit>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Todo