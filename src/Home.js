import React from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import UserStore from './stores/UserStore';
import './App.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: sessionStorage.getItem('name') != "null" ? sessionStorage.getItem('name') : '',
            contactnumber: sessionStorage.getItem('contactnumber') != "null" ? sessionStorage.getItem('contactnumber') : '',
            email: sessionStorage.getItem('email') != "null" ? sessionStorage.getItem('email') : '',
            username: sessionStorage.getItem('username') != "null" ? sessionStorage.getItem('username') : '',
            password: sessionStorage.getItem('password') != "null" ? sessionStorage.getItem('password') : '',
            buttondisabled: false
        }
    }

    setInputValue(property, val) {
        val = val.trim();
        if (val.length > 12) {
            return;
        }
        this.setState({
            [property]: val
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
                                <label className="labelhd">Home</label>
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
                                disabled={true}
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
                                disabled={true}
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
                                disabled={true}
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
                                disabled={true}
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
                            <InputField
                                type='password'
                                placceholder='password'
                                value={this.state.password ? this.state.password : ''}
                                onChange={(val) => this.setInputValue('password', val)}
                                disabled={true}
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
                                onClick={() => this.doEditClick()}>
                                Edit
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
            </div>
        );
    }

    doEditClick() {
        window.location.href = "/EditPage";

    }
}

export default Home;
