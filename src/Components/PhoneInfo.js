import React, { useState } from "react";
const PhoneInfo = ({ info, onDelete }) => {
  const [edit, setEdit] = useState(false);
  const [infos, setInfos] = useState(info);

  const style = {
    border: "1px solid #000",
    width: "500px",
    padding: "10px",
    margin: "10px 0",
  };

  const handleChange = () => {
    setEdit(!edit);
  };

  const handleModify = (e) => {
    setInfos({
      ...infos,
      [e.target.name]: e.target.value,
    });
  };

  const handleDelete = () => {
    onDelete(infos.id);
  };

  return (
    <div style={style}>
      {edit ? (
        <>
          <div>
            {`이름 : `}
            <input name="name" onChange={handleModify} value={infos.name} />
          </div>
          <div>
            {`전화번호 : `}
            <input
              name="phoneNumber"
              onChange={handleModify}
              value={infos.phoneNumber}
            />
          </div>
        </>
      ) : (
        <>
          <div>{`이름 : ${infos.name}`}</div>
          <div>{`전화번호 : ${infos.phoneNumber}`}</div>
        </>
      )}

      <button onClick={handleChange}>{edit ? "적용" : "수정"}</button>
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
};

export default PhoneInfo;
