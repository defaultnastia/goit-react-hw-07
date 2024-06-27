import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const mockInstance = axios.create({
  url: "https://667d4741297972455f645a16.mockapi.io/v1",
});

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await mockInstance.get("/contacts");
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
