import React,{ useState,useEffect } from "react";

import { useDispatch } from "react-redux";

import { addNewTodo } from "../redux/actions";

import AddBoxIcon from '@mui/icons-material/AddBox';
import Zoom from '@mui/material/Zoom';




const TodoForm = () => {
    const [isExpanded, setExpanded] = useState(false);
    const [text, setText] = useState("");
    const [title, setTitle] = useState("");

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();
        const data1 = {
          text : text,
          title : title
        }
        dispatch(addNewTodo(data1));

        setText('');
        setTitle('');
        setExpanded(false);
    }
    useEffect(() => {
      console.log(title);
      console.log(text);
    }, [text,title])
    

    const onInputChange = (e) => {
        setText(e.target.value);
    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
        {/* <div className="inputBoxes">
            <input  
                placeholder="Type And Press Enter"
                className="input"
                onChange={onInputChange}
                value={text}
            />
            <input  
                placeholder="Type And Press Enter"
                className="input"
                onChange={(e)=>setTitle(e.target.value)}
                value={title}
            />
            </div> */}

         {isExpanded ? (
          <input onChange={(e)=>setTitle(e.target.value)} name="title" placeholder="Title" value={title} />
        ) : null}
        <textarea
          onClick={() => {
            setExpanded(true);
          }}
          onChange={onInputChange}
          name="content"
          value={text}
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
        />
        <Zoom in={isExpanded}>
          <button type="submit"
            // onClick={(e) => {
            //   onFormSubmit(e);
            // }}
          >
            <AddBoxIcon />
          </button>
        </Zoom>
        </form>
    )
}

export default TodoForm;
