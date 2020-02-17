import React, { Component } from 'react';
import PhoneForm from './Components/PhoneForm';
import PhoneInfoList from './Components/PhoneInfoList';

class App extends Component {
  id = 3;
  state = {
    information: [
      {
        id: 0,
        name: '박상범',
        phone: '010-4690-4164',
      },
      {
        id: 1,
        name: '아이유',
        phone: '010-1234-5678',
      },
      {
        id: 2,
        name: '아이린',
        phone: '010-0123-0123',
      },
    ],
    keyword: '',
  };

  UNSAFE_componentWillMount() {
    const information = localStorage.information;
    const id = localStorage.id;

    if (information) {
      this.setState({
        information: JSON.parse(information),
        id,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (JSON.stringify(prevState.information) !== JSON.stringify(this.state.information)) {
      localStorage.information = JSON.stringify(this.state.information)
    }
    if (prevState.id !== this.state.id) {
      localStorage.id = this.state.id
    }
  }

  handleChange = e => {
    this.setState({
      keyword: e.target.value,
    });
  };

  handleCreate = data => {
    const { information } = this.state;
    this.setState({
      information: information.concat({
        ...data,
        id: this.id++,
      }),
    });
  };

  handleRemove = id => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id),
    });
  };

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(info => {
        if (info.id === id) {
          return {
            id,
            ...data,
          };
        }
        return info;
      }),
    });
  };

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        <input
          value={this.state.keyword}
          onChange={this.handleChange}
          placeholder="검색.."
        />
        <PhoneInfoList
          data={this.state.information.filter(
            info => info.name.indexOf(this.state.keyword) > -1,
          )}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
