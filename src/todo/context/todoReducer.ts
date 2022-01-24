import { ITodo, ITodoState } from "../interfaces/interfaces";

type TodoAction = 
    | {type: 'addTodo', payload: ITodo}
    | {type: 'toggleTodo', payload: {id: string}}



export const todoReducer = (state: ITodoState, action: TodoAction): ITodoState => {


    switch (action.type) {
        case 'addTodo':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    action.payload
                ]
            }
        case 'toggleTodo':
            return {
                ...state,
                todos: state.todos.map( ({...todo}) => { // ...todo hace para no mutar el item, sino que creo uno nuevo a partir del que esta llegando
                    if(todo.id === action.payload.id) {
                        todo.completed = !todo.completed
                    }
                    return todo;
                })
            }
            
    
        default:
            return state;
    }


}