import React, { useEffect, useState } from 'react';
import './styles.css';
import Header from './Header';
import Characters from './Characters';

function App() {

  return (
    <div className="App">
      <Header />
      <Characters />
    </div>
  );
}
export default App;
