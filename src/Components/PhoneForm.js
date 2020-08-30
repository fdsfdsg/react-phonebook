import React, { useCallback,useRef } from "react";

const PhoneForm = ({ onInsert, inputName, inputPhoneNumber, onChangeInputName, onChangeInputPhoneNumber }) => {

  const onChangePN = useCallback((e) => { 
    onChangeInputPhoneNumber(e.target.value)
  },[onChangeInputPhoneNumber]);

  const onChangeN = useCallback((e) => { 
    onChangeInputName(e.target.value)
  },[onChangeInputName]);

  const currentinput = useRef();

  const onCreate = useCallback(() => {
    onInsert(inputName, inputPhoneNumber);
    onChangeInputName("");
    onChangeInputPhoneNumber("");
    currentinput.current.focus();
  },[onInsert, inputName, inputPhoneNumber]);

  return (
    <div>
      <div>
        <input
          placeholder="이름"
          name="inputName"
          onChange={onChangeN}
          value={inputName}
          ref={currentinput}
        />
        <input
          placeholder="연락처"
          name="inputPhoneNumber"
          onChange={onChangePN}
          value={inputPhoneNumber}
        />
        <button onClick={onCreate}>추가</button>
      </div>
      <div>
        {inputName}
        {inputPhoneNumber}
      </div>
    </div>
  );
};

export default PhoneForm;
