import React, { Component } from 'react';
import Input from './common/Input';

class LoginForm extends Component {
  state = {
    account: { username: '', password: '' },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submetted');
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };
  render() {
    const { account } = this.state;
    return (
      <div>
        <h1 className="login">Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            defaultValue={account.username}
            label="Username"
            onChange={this.handleChange}
          />
          <Input
            name="password"
            defaultValue={account.password}
            label="Password"
            onChange={this.handleChange}
          />

          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
