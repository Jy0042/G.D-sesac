// true false 로 관리되는 isLoggedIn state

const initialState = false;

export const isLoggedInChange = () => ({ type: 'isLoggedIn/change' });


export const isLoggedInReducer = (state = initialState, action) => {
  if (action.type === 'isLoggedIn/change') {
    return !state; // true -> false 로 false -> true 로 state 업데이트
  }
  return state;
};

