/* Notar que el archivo es  .ts y no .tsx, esto es porque lo que contiene es codigo ts solamente, no hay nada de react aquí */


export interface ITodo {
    id:string;
    desc:string
    completed: boolean;
}

export interface ITodoState {
    todoCount:number;
    todos: ITodo[];
    completed: number;
    pending: number;  

}