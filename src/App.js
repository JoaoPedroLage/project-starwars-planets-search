import './App.css';
import React from 'react';
import Provider from './context/SWProvider';
import Table from './components/DataTable';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Provider>
        <Header />
        <Table />
      </Provider>
    </div>
  );
}

export default App;
