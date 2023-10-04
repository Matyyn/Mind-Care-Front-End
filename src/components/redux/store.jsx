import { configureStore } from '@reduxjs/toolkit'
import myReducer from './slices/accountsReducer'
import commentsReducer from './slices/commentsReducer'
import postsReducer from './slices/postsReducer'
import therapistReducer from './slices/therapistReducer'
import appealsReducer from './slices/appealsReducer'
import clientsAccountReducer from './slices/clientsAccountsReducer'
import selectedAccounts from './slices/selectedAccounts'

export const store = configureStore({
  reducer: {
    myReducer:myReducer,
    commentsReducer:commentsReducer,
    postsReducer:postsReducer,
    appealsReducer:appealsReducer,
    therapistReducer:therapistReducer,
    clientsAccountReducer:clientsAccountReducer,
    selectedAccounts:selectedAccounts
  },
})