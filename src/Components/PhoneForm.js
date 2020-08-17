import React, { useState, useRef } from "react";

const PhoneForm = ({onInsert}) => {
  const [input, setInput] = useState({
    name: "",
    phoneNumber: "",
  });

  const onChange = (e) => {
    setInput({  
        ...input,
        [e.target.name]: e.target.value 
    });
  };

  const currentInput = useRef();

  const onCreate = () => {
    onInsert(input.name, input.phoneNumber);
    setInput({
        name: "",
        phoneNumber: ""
    })
    currentInput.current.focus();
  }

  return (
    <div>
      <div>
        <input
          placeholder="이름"
          name="name"
          onChange={onChange}
          value={input.name}
          ref={currentInput}
        />
        <input
          placeholder="연락처"
          name="phoneNumber"
          onChange={onChange}
          value={input.phoneNumber}
        />
        <button onClick={onCreate}>추가</button>
      </div>
      <div>
        {input.name}
        {input.phoneNumber}
      </div>
    </div>
  );
};

export default PhoneForm;
