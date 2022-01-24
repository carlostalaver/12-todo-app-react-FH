
import { useReducer } from 'react';
import { ITodoState } from '../interfaces/interfaces';
import { TodoContext } from './TodoContext';
import { todoReducer } from './todoReducer';


const INITIAL_STATE: ITodoState = {
    todoCount: 2,
    todos: [{
        id: '1',
        desc: 'Recolectar las piedras del infinito',
        completed: false
    },
    {
        id: '2',
        desc: 'Recolectar la piedra del alma',
        completed: false
    }],
    completed: 0,
    pending: 2
};

interface ITodoProviderProps {
    children: JSX.Element | JSX.Element[] // defino si la propiedad children será UNO o VARIOS elementos
}

export const TodoProvider = ({ children }: ITodoProviderProps) => {

    const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

    const toggleTodo= (id: string) => {
        dispatch( { type:'toggleTodo', payload:{ id } } );

    }


    return (
        <TodoContext.Provider value={{
            todoState,
            toggleTodo
        }}>
            {children}
        </TodoContext.Provider>
    );
};
