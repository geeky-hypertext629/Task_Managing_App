import { useState } from "react";

import { toggleTodo, updateTodo } from "../redux/actions";
import { deleteTodo } from "../redux/actions";
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from "react-redux";
import CancelIcon from '@mui/icons-material/Cancel';
// import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import Checkbox from '@mui/material/Checkbox';

const Todo = ({ todo }) => {


    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(todo?.data.text);
    const [title, setTitle] = useState(todo?.data.title);

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        setEditing(prevState => !prevState);
        const data1 = {
            title: title,
            text: text
        }
        dispatch(updateTodo(todo._id, data1))
    }

    return (
        <>

            <li
                className="task"

                style={{
                    textDecoration: todo?.done ? 'line-through' : '',
                    color: todo?.done ? 'black' : '#34495e',
                    // width: todo?.done ? '5rem' : '2rem',
                }}
                data-testid="todo-test"
            >


                <div className="todoStyler">

                    <h1 className="todoItem" style={{ display: editing ? 'none' : '' }}>{todo?.data.title}</h1>

                    <p className="todoItem" style={{ display: editing ? 'none' : '' }}>{todo?.data.text}</p>

                </div>
                <form
                    className="EditForm"
                    style={{ display: editing ? 'flex' : 'none' }}
                    onSubmit={onFormSubmit}
                >
                <div className="inputFields">
                    <div>Enter Title<input
                        type="text"
                        value={title}
                        className="edit-todo"
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter Title"
                    />
                    </div>
                    <div>
                    Enter Description
                    <input
                        type="text"
                        value={text}
                        className="edit-todo"
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter Decription"
                    />
                    </div>
                    </div>
                    <div className="editingbtns">
                    <CheckCircleIcon className="okbtn" onClick={onFormSubmit} />
                    <span style={{ display: editing ? '' : 'none' }} className="cancelbtn" onClick={() => setEditing(prevState => !prevState)}>
                        <CancelIcon />
                    </span>
                    </div>
                </form>

                <div className="flex">
                    <span style={{ display: editing ? 'none' : '' }} className="icon" onClick={() => dispatch(toggleTodo(todo._id))}>
                        <Checkbox />
                    </span>
                    <span style={{ display: editing ? 'none' : '' }} className="icon" onClick={() => dispatch(deleteTodo(todo._id))}>
                        <DeleteIcon />
                    </span>
                    
                    <span style={{ display: editing ? 'none' : '' }} className="icon" onClick={() => setEditing(prevState => !prevState)}>
                        <EditIcon />
                    </span>

                </div>

            </li>

        </>
    )
}

export default Todo;