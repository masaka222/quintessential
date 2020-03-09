import React from 'react';
import './LoginPage.css';

import ImageSection from '../ImageSection/ImageSection';
import LoginSection from '../LoginSection/LoginSection';

function LoginPage() {
  return (
    <div className="LoginPage">
      <ImageSection/>
      <LoginSection/>
    </div>
  );
}

export default LoginPage;