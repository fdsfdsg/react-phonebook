import React,{useState} from 'react';
import PhoneForm from './PhoneForm';
import PhoneInfoList from './PhoneInfoList';

const Phone = ({input,  phones, changeInput ,onInsert, onSearch, onRemove}) => {
   // 내생각엔 굳이 keyword를 리덕스에서 관리해야되나? 걍 여기서 해결하자.
   // 
      const [keyword, setKeyword] = useState('');
    
      const onChange = (e) => {
        setKeyword(e.target.value);
      };
      console.log(keyword)
    
      return (
        <>
          <PhoneForm onInsert={onInsert} />
          <input placeholder="검색.." onChange={onChange} value={keyword} />
          {keyword === '' ? (
            <PhoneInfoList onRemove={onRemove} info={phones} />
          ) : (
            <PhoneInfoList onRemove={onRemove} info={phones} />
          )}
        </>
      );
};

export default Phone;
