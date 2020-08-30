import React, { useState } from 'react';
const PhoneInfo = ({ info, onRemove, onUpdate, onChangeInputName, onChangeInputPhoneNumber, inputName, inputPhoneNumber }) => {
  const [edit, setEdit] = useState(false);
  const [inputs, setInputs] = useState(inputName);
  const [infos, setInfos] = useState(info);
  const []
  
  const style = {
    border: '1px solid #000',
    width: '500px',
    padding: '10px',
    margin: '10px 0',
  };

  const handleChange = () => {
    setEdit(!edit);
    if(edit){
      onUpdate(info.id)
    }
  };

  const handleModifyN = (e) => {
    setInfos({
      ...infos,
      [e.target.name]: e.target.value, // name: '박상범' || phoneNumber: '010-4121-4165' 이렇게 되게하려고 name으로 노린거임
    });
    // onUpdate(e.target.value)
  };

  const handleModifyPN = (e) => {
    onChangeInputPhoneNumber(e.target.value)
  }

  const handleDelete = () => {
    onRemove(info.id);
  };

  return (
    <div style={style}>
      {edit ? (
        <>
          <div>
            {`이름 : `}
            <input 
              name="name" 
              onChange={handleModifyN} 
              value={info.name} 
            />
          </div>
          <div>
            {`전화번호 : `}
            <input
              name="phoneNumber"
              onChange={handleModifyPN}
              value={info.phoneNumber}
            />
          </div>
        </>
      ) : (
        <>
          <div>{`이름 : ${info.name}`}</div>
          <div>{`전화번호 : ${info.phoneNumber}`}</div>
        </>
      )}

      <button onClick={handleChange}>{edit ? '적용' : '수정'}</button>
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
};

export default PhoneInfo;
