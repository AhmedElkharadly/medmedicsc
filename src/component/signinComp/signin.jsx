import React from 'react';
import './signin.css';
import FormInput from '../formInput/formInput'; 


class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state= {
            email:'',
            password:''
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState=({email:'', password:''})
    }
    handleChange = event => {
        const {value, name} = event.target;
        this.setState({ [name]: value })
    }
    
    render(){
        return(
            <div className='signin'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span><br />

            <form  onSubmit={this.handleSubmit}>   
                <FormInput className='form'
                    type="text" 
                    name="Email" 
                    value={this.state.email} 
                    handleChange={this.handleChange}
                    lable='email'
                    required />
                <FormInput className='form'
                    type="password" 
                    name="Password" 
                    value={this.state.password} 
                    handleChange={this.handleChange}
                    lable='password'
                    required /> 
                <input className='input'
                    type="submit" 
                    value='Submit Form' />  
                </form>
            </div>
        )
    }

}
export default SignIn;
