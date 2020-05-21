import React from 'react';
import './App.css';

class SubmitButton extends React.Component {
    render() {
        return (
            <div className="submitButton">
                <a className='btn'
                    text={this.props.text} />
            </div>
        );
    }
}

export default SubmitButton;
