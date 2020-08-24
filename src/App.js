import React, { useState, useRef, useEffect } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

const App = () => {
  const [info, setInfo] = useState([
    {
      id: 1,
      name: '박상범',
      phoneNumber: '010-4690-4164',
    },
    {
      id: 2,
      name: '박한빈',
      phoneNumber: '010-7669-8834',
    },
    {
      id: 3,
      name: '아이유',
      phoneNumber: '010-xxxx-xxxx',
    },
    {
      id: 4,
      name: 'aFdasdAA',
      phoneNumber: '010-xxxx-xxxx',
    },
  ]);
  const [keyword, setKeyword] = useState('');

  const nextId = useRef(4);

  const onChange = (e) => {
    setKeyword(e.target.value);
  };

  const onInsert = (name, phoneNumber) => {
    const nextInfo = {
      id: nextId.current++,
      name: name,
      phoneNumber: phoneNumber,
    };
    setInfo((info) => info.concat(nextInfo));
  };

  const onDelete = (id) => {
    setInfo(info.filter((infos) => infos.id !== id));
  };

  ///////////// 검색기능
  const [newInfo, setNewInfo] = useState([]);

  useEffect(() => {
    setNewInfo(info.filter((infos) => infos.name.indexOf(keyword) > -1));
  }, [keyword,info]);
  //////////////
  console.log(newInfo);

  return (
    <>
      <PhoneForm onInsert={onInsert} />
      <input placeholder="검색.." onChange={onChange} value={keyword} />
      {keyword === '' ? (
        <PhoneInfoList onDelete={onDelete} info={info} />
      ) : (
        <PhoneInfoList onDelete={onDelete} info={newInfo} />
      )}
    </>
  );
};

export default App;
