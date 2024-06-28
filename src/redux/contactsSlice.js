import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./operations";

const initialState = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
  filters: {
    name: "",
  },
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState.contacts,
  selectors: { selectContacts: (state) => state.items },
  extraReducers: (builder) => {
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { selectContacts } = contactsSlice.selectors;
