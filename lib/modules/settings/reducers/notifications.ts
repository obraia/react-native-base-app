import { createSlice } from "@reduxjs/toolkit";

const stock = createSlice({
  name: "notifications",
  initialState: {
    allNotifications: false,
    news: false,
    updates: false,
  },
  reducers: {
    toggleAllNotifications(state) {
      state.allNotifications = !state.allNotifications
    },
    toggleNews(state) {
      state.news = !state.news
    },
    toggleUpdates(state) {
      state.updates = !state.updates
    }
  },
});

export const { toggleAllNotifications, toggleNews, toggleUpdates } = stock.actions;
export default stock.reducer;