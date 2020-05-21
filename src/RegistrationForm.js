import React from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import UserStore from './stores/UserStore';
import './App.css';

class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            contactnumber: '',
            email: '',
            username: '',
            password: '',
            buttondisabled: false
        }
    }

    setInputValue(property, val) {
        document.getElementById("successMsgID").style.display = 'none';
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


    render() {
        return (
            <div className="RegistrationForm">
                <a href="/" className="aStyle">Login</a>
                <table className="table">
                    <tr>
                        <td>
                            <span className="label">
                                <label className="labelhd">Registration Form</label>
                            </span>
                        </td>
                        <td>

                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="label">
                                <label className="label">Name</label>
                            </span>
                        </td>
                        <td>
                            <InputField
                                type='text'
                                placceholder='name'
                                value={this.state.name ? this.state.name : ''}
                                onChange={(val) => this.setInputValue('name', val)}
                                disabled={false}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="label">

                                <label className="label">Contact Number</label>
                            </span>
                        </td>
                        <td>
                            <InputField
                                type='text'
                                placceholder='Username'
                                value={this.state.contactnumber ? this.state.contactnumber : ''}
                                onChange={(val) => this.setInputValue('contactnumber', val)}
                                disabled={false}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="label">
                                <label className="label">Email</label>

                            </span>
                        </td>
                        <td>
                            <InputField
                                type='text'
                                placceholder='Username'
                                value={this.state.email ? this.state.email : ''}
                                onChange={(val) => this.setInputValue('email', val)}
                                disabled={false}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="label">
                                <label className="label">User Name</label>

                            </span>
                        </td>
                        <td>
                            <InputField
                                type='text'
                                placceholder='Username'
                                value={this.state.username ? this.state.username : ''}
                                onChange={(val) => this.setInputValue('username', val)}
                                disabled={false}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="label">
                                <label className="label">Password</label>
                            </span>
                        </td>
                        <td>
                            <input className='input' id='passwordid'
                                type='password'
                                placeholder='password'
                                value={this.state.password ? this.state.password : ''}
                                onChange={(val) => this.setInputValue('password', val)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>

                        </td>
                        <td colSpan={2}>
                            <button
                                className='btnRgn'
                                text='Login'
                                disabled={this.state.buttondisabled}
                                onClick={() => this.doRegisterClick()}>
                                Register
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>

                        </td>
                        <td colSpan={2}>
                            <span className="msg" id='successMsgID' style={{ display: 'none' }}>
                                <label className="msg">Registration Success</label>
                            </span>
                        </td>

                    </tr>
                </table>
                <table>

                </table>

            </div>
        );
    }

    doRegisterClick() {
        this.validate();
    }

    ValidateEmail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return (true)
        }
        else {
            return (false)
        }

    }

    validate() {
        document.getElementById("successMsgID").style.display = 'none';
        var name = this.state.name;
        var username = this.state.username;
        var password = this.state.password;
        var contactnumber = this.state.contactnumber;
        var emailId = this.state.email;

        if (name == "") {
            document.getElementById("successMsgID").style.display = 'block';
            document.getElementById("successMsgID").innerText = 'Please enter Name';
            return;
        }
        else if (contactnumber == "" || !(/^\d+$/.test(contactnumber)) || contactnumber.length != 10) {
            document.getElementById("successMsgID").style.display = 'block';
            document.getElementById("successMsgID").innerText = 'Please enter Valid 10 digit Number';
            return;
        }
        else if (emailId == "" || (!this.ValidateEmail(emailId))) {
            document.getElementById("successMsgID").style.display = 'block';
            document.getElementById("successMsgID").innerText = 'Please enter Valid Email ID';
            return;
        }
        else if (username == "") {
            document.getElementById("successMsgID").style.display = 'block';
            document.getElementById("successMsgID").innerText = 'Please enter User Name';
            return;
        }
        else if (password.length < 6) {
            document.getElementById("successMsgID").innerText = 'Password must be greater than 6';
            document.getElementById("successMsgID").style.display = 'block';
            return;
        }
        else {
            if (username === window.sessionStorage.getItem("username") && password === window.sessionStorage.getItem("password")) {

                document.getElementById("successMsgID").innerText = 'User Already Exist';
                document.getElementById("successMsgID").style.display = 'block';
            }
            else {
                document.getElementById("successMsgID").innerText = 'Registration Success';
                document.getElementById("successMsgID").style.display = 'block';
                window.sessionStorage.setItem("name", this.state.name);
                window.sessionStorage.setItem("contactnumber", this.state.contactnumber);
                window.sessionStorage.setItem("email", this.state.email);
                window.sessionStorage.setItem("username", this.state.username);
                window.sessionStorage.setItem("password", this.state.password);
            }
        }
    }
}

export default RegistrationForm;
