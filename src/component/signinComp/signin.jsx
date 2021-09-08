import React from 'react';
import './signin.css';
import FormInput from '../formInput/formInput'; 
import CustomButton from '../custom-button/custombutton';
// The sign in with google part with it`s button
import { signInWithGoogle } from '../../firebase/firebase.utils'



class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span className='spann'>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <label className='labels'>Email</label>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            required
          />
          <label className='labels'>Password</label>
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton> 
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>     
            </div>
            </form>
      </div>
    );
  }
}

export default SignIn;