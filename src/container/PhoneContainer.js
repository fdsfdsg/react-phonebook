import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeInput, insert, search, remove } from '../modules/phone';
import Phone from '../components/Phone';

const PhoneContainer = () => {
  const { input, keyword, phones } = useSelector(({ phone }) => ({
    phones: phone.phones,
  }));

  const dispatch = useDispatch();

  const onChangeInput = useCallback((input) => dispatch(changeInput(input)), [
    dispatch,
  ]);
  const onInsert = useCallback((phone) => dispatch(insert(phone)), [dispatch]);
  const onSearch = useCallback((keyword) => dispatch(search(keyword)), [
    dispatch,
  ]);
  const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);

  return (
    <Phone
      input={input}
      keyword={keyword}
      phones={phones}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onSearch={onSearch}
      onRemove={onRemove}
    />
  );
};

export default PhoneContainer;
