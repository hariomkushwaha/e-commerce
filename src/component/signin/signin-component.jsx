import React from 'react';
import FormInput from '../../component/form-input/form-input.component';
import './signin-component.style.scss';
import CustomButton from '../../component/custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password:''
        }
    }


    handleSubmit = event =>{
        event.preventDefault();

        this.setState({email:'', password:''});

    };

    handleChange = event =>{
        const { value, name}= event.target;

        this.setState({[name]:value});
    };


    render(){
        return (
            <div className='signin'>
            <h2>I already have an account</h2>
            <span>Sign in with email and password</span>
            
            <form onSubmit={this.handleSubmit}>
                <FormInput 
                name='email' 
                type='email' 
                value={this.state.email} 
                handleChange={this.handleChange}
                label='Email'
                required/>
                
                <FormInput 
                name='password' 
                type='password' 
                value={this.state.email} 
                handleChange={this.handleChangel}
                label='Password'
                required/>
                
                <div className='button'>
                    <CustomButton type='submit'> sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn > 
                    {''}
                    sign in with google {''}
                    </CustomButton>
                </div>
             
            </form>
            </div>
        );
    }
}

export default SignIn;