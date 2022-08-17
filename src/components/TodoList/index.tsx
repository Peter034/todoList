import React, {FC, ReactElement, useEffect, useCallback, useReducer, useContext} from 'react'
import { todoReducer } from '../../redux'
import Input from './input'
import List from './list'
import {IState, ITodo, ACTION_TYPE} from './types'

const initTodoList:ITodo[] = []

function init(initTodoList:ITodo[]):IState {
  return {
    todoList: initTodoList
  }
}

const TodoList:FC = ():ReactElement => {

  const [state, dispatch] = useReducer(todoReducer,initTodoList,init)

  const addTodo = useCallback((todo:ITodo)=>{
    dispatch({
      type:ACTION_TYPE.ADD_TODO,
      payload: todo
    })
  },[])

  // require and render the list data after refreshment
  useEffect(()=>{
    const list = localStorage.getItem('todoList' || '[]')
    if (list) {
      const todoLists = JSON.parse(list)
      dispatch({
        type: ACTION_TYPE.INIT_TODOLIST,
        payload: todoLists
      })
    }
  },[])

  // store the list data
  useEffect(()=>{
    localStorage.setItem('todoList', JSON.stringify(state.todoList))
  },[state.todoList])

  const removeTodo = useCallback((id:number)=>{
    dispatch({
      type: ACTION_TYPE.REMOVE_TODO,
      payload: id
    })
  },[])

  const toggleTodo = useCallback((id:number)=>{
    dispatch({
      type: ACTION_TYPE.TOGGLE_TODO,
      payload: id
    })
  },[])

  return (
    <div>
      <Input addTodo={addTodo} todoList={state.todoList}/>
      <List todoList={state.todoList} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
    </div>
  )
}

export default TodoList
