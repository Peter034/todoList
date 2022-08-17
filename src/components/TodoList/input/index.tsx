import React, {FC, useRef, ReactElement} from 'react'
import { ITodo } from '../types'

interface IProps {
  addTodo: (todo:ITodo) => void,
  todoList: ITodo[]
}

const Input:FC<IProps> = ({addTodo,todoList}):ReactElement => {

  const inputRef = useRef<HTMLInputElement>(null)
  
  const addItem = ():void => {
    // use '!' to assert that .current is not null
    const val: string = inputRef.current!.value.trim()

    if(val.length){
      const isExist = todoList.find(todo => todo.content === val)
      if (isExist) {
        alert('this item has existed!')
        return
      }

      // add items
      addTodo({
        id: new Date().getTime(),
        content:val,
        completed: false
      })

      // clear input after add
      inputRef.current!.value = ''
    }
  }

  return (
    <div>
      <input type="text" placeholder="please enter the things to do" ref={inputRef}/>
      <button onClick={addItem}>add</button>
    </div>
  )
}

export default Input
