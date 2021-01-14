import { UserActionTypes } from './user.types';

export default (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
