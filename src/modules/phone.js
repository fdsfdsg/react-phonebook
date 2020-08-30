import { createAction, handleActions } from 'redux-actions';
//액션
const CHANGE_INPUT_NAME = 'phone/CHANGE_INPUT_NAME';
const CHANGE_INPUT_PHONE_NUMBER = 'phone/CHANGE_INPUT_PHONE_NUMBER';
const INSERT = 'phone/INSERT';
const SEARCH = 'phone/SEARCH';
const REMOVE = 'phone/REMOVE';
const UPDATE = 'phone/UPDATE';

//액션 생성 함수
export const changeInputName = createAction(CHANGE_INPUT_NAME, (inputName) => inputName);
export const changeInputPhoneNumber = createAction(CHANGE_INPUT_PHONE_NUMBER, (inputPhoneNumber) => inputPhoneNumber);
let nextId = 4;
export const insert = createAction(INSERT, (name, phoneNumber) => ({
  id: nextId++,
  name,
  phoneNumber,
}));
export const search = createAction(SEARCH, (phone) => phone);
export const remove = createAction(REMOVE, (id) => id);
export const update = createAction(UPDATE, phones => phones);

const initialState = {
  inputName: '',
  inputPhoneNumber: '',
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
    [CHANGE_INPUT_NAME]: (state, { payload: inputName }) => ({ ...state, inputName }),
    [CHANGE_INPUT_PHONE_NUMBER]: (state, { payload: inputPhoneNumber }) => ({ ...state, inputPhoneNumber}),
    [INSERT]: (state, { payload: phone }) => ({
      ...state,
      phones: state.phones.concat(phone),
    }),
    [SEARCH]: (state, { payload: keyword }) => ({
      ...state,
      phones: state.phones.filter((phone) => phone.name.indexOf(keyword) > -1),
    }),
    [REMOVE]: (state, { payload: id }) => ({
      ...state,
      phones: state.phones.filter((phone) => phone.id !== id),
    }),
    [UPDATE]: (state, { payload: currentId }) => ({
      ...state,
      phones: state.phones.map((phone) => phone.id === currentId ? ({...phone, name: phone.name }) : phone)
    }),
  },
  initialState,
);

export default phone;
