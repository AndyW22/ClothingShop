import { createSelector } from 'reselect';

const selectDirectory = (state) => state.directory;

export default createSelector(
  [selectDirectory],
  (directory) => directory.sections,
);
