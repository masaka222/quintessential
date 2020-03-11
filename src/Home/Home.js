import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import ActionButton from '../ActionButton/ActionButton';

function Home() {
  return (
    <div className="Home">
      <Header title='Κεντρική σελίδα'/>
      <div className = 'Home_buttons'>
        <ActionButton 
          title     = 'ΕΞΑΓΩΓΗ'
          subtitle  = 'Εξαγωγή υλικών ή ρεταλιών απο την αποθήκη'
          color     = 'pinkColor'
        />
        <ActionButton 
          title     = 'ΜΕΤΑΚΙΝΗΣΗ'
          subtitle  = 'Εξαγωγή υλικών ή ρεταλιών απο την αποθήκη'
          color     = 'yellowColor'
        />
        <ActionButton 
          title     = 'ΕΙΣΑΓΩΓΗ'
          subtitle  = 'Εξαγωγή υλικών ή ρεταλιών απο την αποθήκη'
          color     = 'greenColor'
        />
      </div>
    </div>
  );
}

export default Home;