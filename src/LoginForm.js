import React from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import UserStore from './stores/UserStore';
import RegistrationForm from './RegistrationForm';
import './App.css';
import { NavLink, Redirect } from 'react-router-dom';
import Home from './Home'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            buttondisabled: false
        }
    }

    setInputValue(property, val) {
        var inputval = '';
        if ([property] == 'password') {
            inputval = document.getElementById("passwordid").value;
        }
        else {
            inputval = val.trim();
        }

        this.setState({
            [property]: inputval
        });
    }

    resetForm() {
        this.setState({
            username: '',
            password: '',
            buttondisabled: false
        });
    }

    async dologin() {
        if (!this.state.username) {
            return;
        }
        if (!this.state.password) {
            return;
        }
        this.setState({
            buttondisabled: true
        })
        try {
            let res = await fetch('/login', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                })
            }
            );
            let result = await res.json();
            if (result && result.success) {
                UserStore.isLoggedIn = true;
                UserStore.username = result.username;
            }
            else if (result && result.success === false) {
                this.resetForm();
                alert(result.msg);
            }

        }
        catch (e) {

        }
    }

    render() {
        return (
            <div className="loginForm">
                <label className="labelhd">Login Form</label>
                <InputField
                    type='text'
                    placceholder='Username'
                    value={this.state.username ? this.state.username : ''}
                    onChange={(val) => this.setInputValue('username', val)}
                    disabled={false}
                />
                <input className='input' id='passwordid'
                    type='password'
                    placeholder='password'
                    onChange={(val) => this.setInputValue('password', val)}
                />  
                <button
                    className='btnlogin'
                    text='Login'
                    disabled={this.state.buttondisabled}
                    onClick={() => this.dologinClick()}>
                    Log in
                </button>
                <a href="/RegistrationForm" className="aStyle">Registration</a>
                <span className="msg" id='successMsgID' style={{ display: 'none' }}>
                    <label className="msg">Login Message</label>
                </span>
            </div>
        );
    }

    dologinClick() {

        this.validate();
    }

    validate() {
        document.getElementById("successMsgID").style.display = 'none';
        var name = this.state.username;
        var passwordlength = this.state.password.length;
        var status = false;
        if (name == "") {
            document.getElementById("successMsgID").style.display = 'block';
            document.getElementById("successMsgID").innerText = 'Please enter User Name';
            return;
        }
        else if (passwordlength < 6) {
            document.getElementById("successMsgID").style.display = 'block';
            document.getElementById("successMsgID").innerText = 'Password must be greater than 6';
            return;
        } else {
            let userName = sessionStorage.getItem('username');
            let passWord = sessionStorage.getItem('password');
            if (userName == this.state.username && passWord == this.state.password) {
                window.location.href = "/HomePage";
            } else {
                document.getElementById("successMsgID").style.display = 'block';
                document.getElementById("successMsgID").innerText = 'Password Enter Valid UserName/Password';
            }
        }

    }

}

export default LoginForm;
