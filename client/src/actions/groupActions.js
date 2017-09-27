/*eslint-disable */

import { getUserGroups } from '../components/utils/postit-api';

// actions//
export const FETCH_USER_GROUPS = 'FETCH_USER_GROUPS';
export const GROUPS_IS_LOADING = 'GROUPS_IS_LOADING';
export const GROUPS_HAS_ERROR = 'GROUPS_HAS_ERROR';

// on fetching groups success//
export const fetchUserGroupsSuccess = groups => ({
  type: FETCH_USER_GROUPS,
  groups
});

export const groupsIsLoading = bool => ({
  type: GROUPS_IS_LOADING,
  isLoading: bool
});

export const groupsHasError = bool => ({
  type: GROUPS_HAS_ERROR,
  hasError: bool
});

export const fetchUserGroups = () =>
  (dispatch) => {
    dispatch(groupsIsLoading(true));

    return getUserGroups().then((response) => {
      dispatch(fetchUserGroupsSuccess(response.data['userGroups']));

      dispatch(groupsIsLoading(false));
    });
  };

