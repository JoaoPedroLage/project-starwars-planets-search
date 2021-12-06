import React from 'react';
import Context from './context/Context';
import './App.css';

function App() {
  return (
    <Context.Provider>
      <span>Hello, App!</span>
    </Context.Provider>
  );
}

export default App;
