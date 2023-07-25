// accountsActions.js

import { deleteItem } from '../slices/accountsReducer';

export const deleteItemFromStore = (itemId) => (dispatch) => {
  dispatch(deleteItem(itemId));
};
