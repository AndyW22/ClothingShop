import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

export default createSelector([selectUser], (user) => user.currentUser);
