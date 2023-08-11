import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const SingleQuestion = ({ id, title, info, buttonId, setActive }) => {
  // const [toggle, setToggle] = useState(false);
  const isActive = id === buttonId; // this is false at first

  return (
    <article className="question">
      <div>
        <header>
          <h5>{title}</h5>
          <button
            type="button"
            className="question-btn"
            onClick={() => {
              setActive(id); //once we give it an id we look back at app.jsx // now isActive is true
              //only for the current onclick component
            }}
          >
            {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        <p>{isActive ? info : ""}</p>
      </div>
    </article>
  );
};

export default SingleQuestion;
