import React from 'react';
import PhoneInfo from './PhoneInfo';

const PhoneInfoList = ({
  info,
  onRemove,
  onUpdate,
  onChangeInputName,
  onChangeInputPhoneNumber,
  inputName,
  inputPhoneNumber,
}) => {
  return info.map((infos) => (
    <PhoneInfo
      info={infos}
      key={infos.id}
      onRemove={onRemove}
      onUpdate={onUpdate}
      inputName={inputName}
      inputPhoneNumber={inputPhoneNumber}
      onChangeInputName={onChangeInputName}
      onChangeInputPhoneNumber={onChangeInputPhoneNumber}
    />
  ));
};

export default PhoneInfoList;
