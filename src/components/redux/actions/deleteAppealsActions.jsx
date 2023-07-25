// accountsActions.js

import { deleteAppealsItem } from '../slices/appealsReducer';

export const deleteAppeals = (itemId) => (dispatch) => {
  dispatch(deleteAppealsItem(itemId));
};
