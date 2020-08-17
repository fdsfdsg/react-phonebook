import React from "react";
import PhoneInfo from "./PhoneInfo";

const PhoneInfoList = ({ info, onDelete }) => {
  return (
    <>
      {info.map((infos) => (
        <PhoneInfo info={infos} key={infos.id} onDelete={onDelete} />
      ))}
    </>
  );
};

export default PhoneInfoList;
