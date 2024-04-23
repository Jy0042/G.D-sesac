const CREATE = "todo/CREATE";
const DONE = "todo/DONE";

export function create(payload) {
  return {
    type: CREATE,
    payload,
  };
}

export function done(id) {
  return {
    type: DONE,
    id,
  }
}

const initialState = {
  list: [
    {
      id: 0,
      text: "react study",
      done: false,
    },
    {
      id: 1,
      text: "포폴이랑 이력서 쓰기",
      done: false,
    },
    {
      id: 2,
      text: "운동하기",
      done: false,
    },
  ],
};

let counts = initialState.list.length;
initialState['nextID'] = counts;

export default function todo(state = initialState, action) {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        list: state.list.concat({
          id: action.payload.id,
          text: action.payload.text,
          done: false,
        }),
        nextID: action.payload.id + 1,
      };
    case DONE:
      return {
        ...state,
        list: state.list.map((el) => {
          if (el.id === action.id) {
            return { ...el, done: true, };
          };
          return el;
        }),
      };
    default:
      return state;
  }
}
