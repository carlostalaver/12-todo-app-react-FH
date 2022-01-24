

import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { useTodos } from '../hooks/useTodos';
import { TodoItem } from './TodoItem';

export const TodoList = () => {

    /* 
    Forma nuemero 1: trabajando directamente con el contexto
    const { todoState } = useContext( TodoContext );
    const { todos } = todoState; */

    /* Usuando el hooks personalizado useTodos, me permite usar menos codigo */
    const { todos } = useTodos();


    return (
        <ul>
            {
                todos.map(todo => <TodoItem key={todo.id} todo={todo} />)
            }
        </ul>
    );
};
