// accountsActions.js

import { deletePostsItem } from '../slices/postsReducer';

export const deletePost = (itemId) => (dispatch) => {
  dispatch(deletePostsItem(itemId));
};
