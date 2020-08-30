import React, { useState } from 'react';
import PhoneForm from './PhoneForm';
import PhoneInfoList from './PhoneInfoList';

const Phone = ({
  phones,
  inputName,
  inputPhoneNumber,
  onChangeInputName,
  onChangeInputPhoneNumber,
  onInsert,
  // onSearch,
  onRemove,
  onUpdate,
}) => {
  // 내생각엔 굳이 keyword를 리덕스에서 관리해야되나? 걍 여기서 해결하자.
  //
  const [keyword, setKeyword] = useState('');

  const onChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <>
      <PhoneForm
        onInsert={onInsert}
        inputName={inputName}
        inputPhoneNumber={inputPhoneNumber}
        onChangeInputName={onChangeInputName}
        onChangeInputPhoneNumber={onChangeInputPhoneNumber}
      />
      <input placeholder="검색.." onChange={onChange} value={keyword} />
      {keyword === '' ? (
        <PhoneInfoList
          onRemove={onRemove}
          info={phones}
          onUpdate={onUpdate}
          inputName={inputName}
          inputPhoneNumber={inputPhoneNumber}
          onChangeInputName={onChangeInputName}
          onChangeInputPhoneNumber={onChangeInputPhoneNumber}
        />
      ) : (
        <PhoneInfoList
          onRemove={onRemove}
          info={phones.filter(phone => phone.name.indexOf(keyword) !== -1)}
          onUpdate={onUpdate}
          inputName={inputName}
          inputPhoneNumber={inputPhoneNumber}
          onChangeInputName={onChangeInputName}
          onChangeInputPhoneNumber={onChangeInputPhoneNumber}
        />
      )}
    </>
  );
};

export default Phone;
