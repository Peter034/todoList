// Each item of list
export interface ITodo {
  id:number,
  content:string,
  completed:boolean
}

// List is an array
export interface IState {
  todoList:ITodo[]
}

// redux
// action
export interface IAction {
  type: ACTION_TYPE,
  payload: ITodo | ITodo[] | number
}

// enum stores the type of action
export enum ACTION_TYPE {
  ADD_TODO = 'addTodo',
  REMOVE_TODO = 'removeTodo',
  TOGGLE_TODO = 'toggleTodo',
  INIT_TODOLIST = 'initTodoList'
}
