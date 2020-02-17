import React, { Component } from "react";
import PhoneInfo from "./PhoneInfo";

class PhoneInfoList extends Component {
  static defaultProps = {
    data: []
  };

  render() {
    const { data, onRemove, onUpdate } = this.props; //PhoneInfo 에서 props로 data를 추출받아올것이다.
    
    //console.log('rendering list');
    
    const list = data.map(info => (
      <PhoneInfo
        onRemove={onRemove}
        onUpdate={onUpdate}
        info={info}
        key={info.id}
      />
    ));
    return <div>{list}</div>;
  }
}

export default PhoneInfoList;
