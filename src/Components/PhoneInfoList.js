import React from "react";
import PhoneInfo from "./PhoneInfo";

const PhoneInfoList = ({ info, onRemove }) => {
  return info.map((infos) => <PhoneInfo info={infos} key={infos.id} onRemove={onRemove} /> )
};

export default PhoneInfoList;
