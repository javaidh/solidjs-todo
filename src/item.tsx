import { css } from "solid-styled-components";
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
    const changeComplete = () => {
        props.setTodos((todos: TodoItem[]) => {
            const newTodos = todos.map((todo) => props.todo === todo ? {...todo, complete: !todo.complete} : todo);
            return newTodos;
        })
    }
    return (
        <li class={itemStyle}>
            <label>
                <input type="checkbox" checked={props.todo.complete} onChange={changeComplete} />
                {props.todo.text}
            </label>
        </li>
    )
}