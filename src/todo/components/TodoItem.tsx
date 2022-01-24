import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { ITodo } from "../interfaces/interfaces";


interface ITodoItemProps {
    todo: ITodo
}


export const TodoItem = ({ todo }: ITodoItemProps) => {

    const { toggleTodo } = useContext( TodoContext );

    const handletDbClick = (e: any) => {
        toggleTodo( todo.id )   
    }
    

  return (
    <li style= {{ cursor: 'pointer', textDecoration: todo.completed ? 'line-through':''}}
        onDoubleClick={ handletDbClick } >
        { todo.desc }
    </li>
  );
};
