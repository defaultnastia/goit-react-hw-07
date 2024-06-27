import { faker } from "@faker-js/faker";
import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import initialContacts from "../data/initialContacts.json";

// --- in case if the initial state should be empty use this: ---
// const initialState = {
//   contacts: {
//     items: [],
//   },
// };

const initialState = {
  contacts: {
    items: initialContacts,
  },
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState.contacts,
  selectors: { selectContacts: (state) => state.items },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(data) {
        return {
          payload: {
            name: data.name,
            number: data.number,
            avatar: faker.image.urlPicsumPhotos({ height: 80, width: 80 }),
            id: nanoid(),
          },
        };
      },
    },
    deleteContact: {
      reducer(state, action) {
        const index = state.items.findIndex(
          (contact) => contact.id === action.payload
        );
        state.items.splice(index, 1);
      },
      prepare(id) {
        return { payload: id };
      },
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
export const { selectContacts } = contactsSlice.selectors;
