import React from "react";
import Draggable, { DraggableCore } from "react-draggable";

const TextInput = ({ setData }) => {
  const handleChange = (e) => {
    const data = e.target.value;
    setData(data);
  };
  return (
    <div>
      <Draggable>
        <input onChange={handleChange} type="text" />
      </Draggable>
    </div>
  );
};

export default TextInput;
