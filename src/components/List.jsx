import React from "react";
import { observer } from "mobx-react";

const List = ({ notes, removeNote }) => {
  return (
    <ul className="list-group">
      {notes.map((item) => (
        <li key={item.id} className="list-group-item listItem">
          {item.title}
          <button
            onClick={()=>removeNote(item.id)}
            type="button"
            className="btn btn-sm btn-outline-danger"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default observer(List);
