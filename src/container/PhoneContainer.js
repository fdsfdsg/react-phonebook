import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeInputName, changeInputPhoneNumber, insert, search, remove, update } from '../modules/phone';
import Phone from '../components/Phone';

const PhoneContainer = () => {
  const { inputName, inputPhoneNumber, phones } = useSelector(({ phone }) => ({
    inputName: phone.inputName,
    inputPhoneNumber: phone.inputPhoneNumber,
    phones: phone.phones,
  }));

  const dispatch = useDispatch();

  const onChangeInputName = useCallback((inputName) => dispatch(changeInputName(inputName)), [
    dispatch,
  ]);
  const onChangeInputPhoneNumber = useCallback((inputPhoneNumber) => dispatch(changeInputPhoneNumber(inputPhoneNumber)),[dispatch]);
  const onInsert = useCallback((name,phoneNumber) => dispatch(insert(name,phoneNumber)), [dispatch]);
  // const onSearch = useCallback((keyword) => dispatch(search(keyword)), [
  //   dispatch,
  // ]);
  const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);
  const onUpdate = useCallback(currentId => dispatch(update(currentId)),[dispatch]);

  return (
    <Phone
      inputName={inputName}
      inputPhoneNumber={inputPhoneNumber}
      onChangeInputName={onChangeInputName}
      onChangeInputPhoneNumber={onChangeInputPhoneNumber}
      // keyword={keyword}
      phones={phones}
      onInsert={onInsert}
      // onSearch={onSearch}
      onRemove={onRemove}
      onUpdate={onUpdate}
    />
  );
};

export default PhoneContainer;
