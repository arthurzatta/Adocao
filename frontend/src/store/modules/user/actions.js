export function createUserRequest(data) {
  return {
    type: '@user/CREATE_USER_REQUEST',
    payload: { data },
  }
}

export function createUserSuccess(user) {
  return {
    type: '@user/CREATE_USER_SUCCESS',
    payload: { user },
  }
}

export function createUserFailure() {
  return {
    type: '@user/CREATE_USER_FAILURE',
  }
}

