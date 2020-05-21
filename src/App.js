import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './App.css';
import RegistrationForm from './RegistrationForm';
import Home from './Home'
import EditPage from './EditPage';

class App extends React.Component {


    render() {

        return (
            <Router>
                <div className="app">
                    <Route path="/" exact strict render={
                        () => {
                            return (
                                <div className='container'>
                                    <LoginForm />
                                </div>
                            )
                        }
                    }
                    />
                    <Route path="/RegistrationForm" exact strict render={
                        () => {
                            return (
                                <div className='container'>
                                    <RegistrationForm />
                                </div>
                            )
                        }
                    }
                    />
                    <Route path="/HomePage" exact strict render={
                        () => {
                            return (
                                <div className='container'>
                                    <Home />
                                </div>
                            )
                        }
                    }
                    />
                    <Route path="/EditPage" exact strict render={
                        () => {
                            return (
                                <div className='container'>
                                    <EditPage />
                                </div>
                            )
                        }
                    }
                    />

                </div>
            </Router>
        );

    }
}

export default App;
