// accountsActions.js

import { deleteCommentsItem } from '../slices/commentsReducer';

export const deleteComment = (itemId) => (dispatch) => {
  dispatch(deleteCommentsItem(itemId));
};
