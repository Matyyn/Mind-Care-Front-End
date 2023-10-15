import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import myReducer from './slices/accountsReducer';
import commentsReducer from './slices/commentsReducer';
import postsReducer from './slices/postsReducer';
import therapistReducer from './slices/therapistReducer';
import appealsReducer from './slices/appealsReducer';
import clientsAccountReducer from './slices/clientsAccountsReducer';
import selectedAccounts from './slices/selectedAccounts';
import postTagsSlice from './slices/TagsSlice'
import therapistDataSlice from './slices/TherapistDataSlice'

const rootReducer = combineReducers({
  myReducer: myReducer,
  commentsReducer: commentsReducer,
  postsReducer: postsReducer,
  appealsReducer: appealsReducer,
  therapistReducer: therapistReducer,
  clientsAccountReducer: clientsAccountReducer,
  selectedAccounts: selectedAccounts,
  postTags: postTagsSlice,
  therapistData: therapistDataSlice,
});

const persistConfig = {
  key: 'root',
  storage,  
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
