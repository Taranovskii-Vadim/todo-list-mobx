import { decorate, observable, action } from "mobx";
import { nanoid } from "nanoid";
import Axios from "axios";

const baseUrl = "https://react-notes-3a1bc.firebaseio.com";

class Store {
  notes = [];

  async getNotes() {
    const response = await Axios.get(`${baseUrl}/notes.json`);
    Object.keys(response.data).forEach((key) => {
      const note = { id: key, ...response.data[key] };
      this.notes.push(note);
    });
  }

  addNote(title) {
    this.notes.push({ id: nanoid(5), title });
  }
  
  removeNote(id) {
    const index = this.notes.findIndex((item) => item.id === id);
    this.notes.splice(index, 1);
  }
}

decorate(Store, {
  notes: observable,
  getNotes: action.bound,
  addNote: action,
  removeNote: action,
});

export default new Store();
