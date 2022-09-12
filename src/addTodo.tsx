import { createSignal } from "solid-js";
import type { Component} from "solid-js";
import type { TodoItem } from "./item";

type AddTodoProps = {
    setTodos: (todoFunc: any) => void;
}

export const AddTodo: Component<AddTodoProps> = (props) => {
    const [newTodo, setNewTodo] = createSignal<any>('');

    return (
        <form>
            <input
                value={newTodo()}
                onChange={ (e) => {
                    setNewTodo(e.currentTarget.value);
                }}
            />
            <button type="submit" onClick={(e) => {
                e.preventDefault();
                props.setTodos((todos: TodoItem[]) => {
                   return [...todos, {text: newTodo(), complete: false}]
                });
                setNewTodo('')
            }}>Add Todo</button>
        </form>
    )
}