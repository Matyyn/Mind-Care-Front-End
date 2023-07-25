// accountsActions.js

import { editItem } from '../slices/accountsReducer';

export const editItemFromStore = (itemId) => (dispatch) => {
  dispatch(editItem(itemId));
};
