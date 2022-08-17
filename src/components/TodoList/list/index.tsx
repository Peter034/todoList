import React, { FC } from 'react';
import { ITodo } from '../types';
import Item from './item'

interface IProps {
  todoList:ITodo[],
  toggleTodo:(id: number) => void,
  removeTodo:(id: number) => void
}

const List:FC<IProps> = ({todoList,toggleTodo,removeTodo}) => {
  return (
    <div>
      { 
        todoList && todoList.map((todo:ITodo) => {
          return (
            <Item key={todo.id} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
          )
        })
      } 
    </div>
  )
}

export default List
