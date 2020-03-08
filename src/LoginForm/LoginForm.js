import React from 'react';
import './LoginForm.css';

function LoginForm() {
  return (
    <div className="LoginForm">
        <p className='LoginForm_header'>ΣΥΝΔΕΣΗ</p>
        <form id='user-form'>
              Δ/νση ηλεκτρονικού ταχυδρομείου¨ <br/>
              <input type = "text" placeholder = 'Enter email' autocapitalize="none" autocorrect="off" autocapitalize="none"/>   <br/>
              Κωδικός πρόσβασης<br/>
              <input type = "password" placeholder = 'Enter password' autocorrect="off" autocapitalize="none"/>  <br/>
              <input type = "submit" className='LoginForm_button' value= 'Είσοδος'/>
          </form>
          <a href='#' className='LoginForm_forgotPass'>Ξέχασα τον κωδικό μου</a>
    </div>
  );
}

export default LoginForm;