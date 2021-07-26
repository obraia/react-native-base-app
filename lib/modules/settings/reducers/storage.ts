import { NativeModules } from 'react-native';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { purgeStoredState } from 'redux-persist';
import AsyncStorage from '@obraia/async-storage';
import RNRestart from 'react-native-restart';
import formatBytes from '../../../shared/utils/formatBytes';

const { RNC_AsyncSQLiteDBStorage } = NativeModules;

export const getStorageSize = createAsyncThunk(
  'settings/getStorageSize',
  async () => {
    const response = await RNC_AsyncSQLiteDBStorage.getStorageSize();
    return formatBytes(response);
  }
);

const stock = createSlice({
  name: "storage",
  initialState: {
    autoDownload: false,
    sync: false,
    cache: { size: 0, unity: 'Bytes' },
    searchHistory: []
  },
  reducers: {
    toggleAutoDownload(state) {
      state.autoDownload = !state.autoDownload
    },
    toggleSync(state) {
      state.sync = !state.sync
    },
    clearSearchHistory(state) {
      state.searchHistory = [];
    },
    clearCache(state) {
      purgeStoredState({
        key: 'root',
        storage: AsyncStorage,
        blacklist: [],
      });

      RNRestart.Restart();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getStorageSize.fulfilled, (state, action) => {
      state.cache = action.payload;
    })
  },
});

export const { toggleAutoDownload, toggleSync, clearCache, clearSearchHistory } = stock.actions;
export default stock.reducer;