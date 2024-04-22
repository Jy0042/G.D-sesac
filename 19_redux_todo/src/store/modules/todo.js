const initialState = {
  list: [
    {
      id: 0,
      text: 'react study',
      done: false,
    },
    {
      id: 1,
      text: '포폴이랑 이력서 쓰기',
      done: false,
    },
    {
      id: 2,
      text: '운동하기',
      done: false,
    },
  ],
};

export default function todo(state = initialState, action) {
  return state;
}