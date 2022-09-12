import { css } from "solid-styled-components";
import { createSignal, Show } from "solid-js";
import type { Component} from "solid-js";

type ItemProps = {
    todo: TodoItem;
    setTodos: (func: any) => void;
}

export type TodoItem = {
    complete: boolean
    text: string;
}

const ItemStyling = (complete: boolean) => css `
  text-decoration: ${complete ? "line-through" : "none"};
`

export const Item: Component<ItemProps> = (props) => {
    const itemStyle = ItemStyling(props.todo.complete);
    const [isEditing, setIsEditing] = createSignal(false);
    const changeComplete = () => {
        props.setTodos((todos: TodoItem[]) => {
            const newTodos = todos.map((todo) => props.todo === todo ? {...todo, complete: !todo.complete} : todo);
            return newTodos;
        })
    }
    const deleteItem = () => {
        props.setTodos((todos: TodoItem[]) => {
            const newTodos = todos.filter((todo) => todo.text !== props.todo.text);
            return newTodos;
        })
    }

    const switchMode = (e: Event) => {
        e.preventDefault();
        setIsEditing(!isEditing())
    }

    const displayMode = () => (
        <div>
        {props.todo.text}
            <button onClick={switchMode}>Edit</button>
        <button onClick={deleteItem}>X</button>
        </div>);

    const editMode = () => (
        <div>
            <input
                value={props.todo.text}
            />
            <button>Save</button>
            <button onClick={switchMode}>Cancel</button>
        </div>
    );

    return (
        <li class={itemStyle}>
            <label>
                <input type="checkbox" checked={props.todo.complete} onChange={changeComplete} />
                <Show when={isEditing()} fallback={displayMode()}>
                    {editMode()}
                </Show>
            </label>
        </li>
    )
}