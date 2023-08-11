import React, { useState } from "react";
import SingleQuestion from "./SingleQuestion";
const Questions = ({ quests, buttonId, setActive }) => {
  return (
    <div className="container">
      {quests.map((single) => {
        return (
          <SingleQuestion
            key={single.id}
            {...single}
            buttonId={buttonId}
            setActive={setActive}
          />
        );
      })}
    </div>
  );
};

export default Questions;
