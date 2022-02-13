import React, { useEffect } from "react";
import Form from "./components/Form";
import List from "./components/List";
import { inject } from "mobx-react";

const App = ({ store }) => {
  useEffect(() => {
    store.getNotes();
  }, []);
  return (
    <div className="container pt-4">
      <Form addNote={(v) => store.addNote(v)} />
      <List notes={store.notes} removeNote={(i) => store.removeNote(i)} />
    </div>
  );
};

export default inject("store")(App);
