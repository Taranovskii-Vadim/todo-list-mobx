import React, { useState } from "react";

const Form = ({ addNote }) => {
  const [inp, setInp] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    addNote(inp);
    setInp('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          value={inp}
          onChange={(e) => setInp(e.target.value)}
          className="form-control"
        />
      </div>
    </form>
  );
};

export default Form;
