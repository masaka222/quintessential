import React from 'react';
import './LoginForm.css';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {

  redirect = () => {
    this.props.history.push('./management');
  }

  render() {
    return (
      <div className="LoginForm">
          <p className='LoginForm_header'>ΣΥΝΔΕΣΗ</p>
          <form id='user-form'>
                Δ/νση ηλεκτρονικού ταχυδρομείου¨ <br/>
                <input type = "text" placeholder = 'Enter email' autoCorrect="off" autoCapitalize="none"/>   <br/>
                Κωδικός πρόσβασης<br/>
                <input type = "password" placeholder = 'Enter password' autoCorrect="off" autoCapitalize="none"/>  <br/>
                <input type = "submit" className='LoginForm_button' value= 'Είσοδος' onClick = {this.redirect}/>
            </form>
            <a href='/' className='LoginForm_forgotPass'>Ξέχασα τον κωδικό μου</a>
      </div>
    );
  }
}

export default withRouter(LoginForm);