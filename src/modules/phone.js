import { createAction, handleActions } from 'redux-actions';
//액션
const CHANGE_INPUT = 'phone/CHANGE_INPUT';
const INSERT = 'phone/INSERT';
const SEARCH = 'phone/SEARCH';
// const CHANGE = 'phone/CHANGE';
const REMOVE = 'phone/REMOVE';

//액션 생성 함수
export const changeInput = createAction(CHANGE_INPUT, (input) => input);
let nextId = 4;
export const insert = createAction(INSERT, (name,phoneNumber) => ({
  id: nextId++,
  name,
  phoneNumber,
}));
export const search = createAction(SEARCH, (phone) => phone);
// export const change = createAction(CHANGE, )
export const remove = createAction(REMOVE, (id) => id);

const initialState = {
  input: [
    {
      name:'' ,
      phoneNumber:''
    }
  ],
  phones: [
    {
      id: 1,
      name: '박상범',
      phoneNumber: '010-4690-4164',
    },
    {
      id: 2,
      name: '박한빈',
      phoneNumber: '010-7669-8834',
    },
    {
      id: 3,
      name: '아이유',
      phoneNumber: '010-7724-2851',
    },
  ],
};

//리듀서

const phone = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) => ({ ...state, input }),
    [INSERT]: (state, { payload: phone }) => ({
      ...state,
      phones: state.phones.concat(phone),
    }),
    [SEARCH]: (state, { payload: keyword }) => ({
      ...state,
      todos: state.todos.filter((todo) => todo.name.indexOf(keyword) > -1),
    }),
    [REMOVE]: (state, { payload: id }) => ({
      ...state,
      phones: state.phones.filter((phone) => phone.id !== id),
    }),
  },
  initialState,
);

export default phone;
