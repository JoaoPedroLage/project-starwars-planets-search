import './App.css';
import React from 'react';
import Provider from './context/SWProvider';
import Table from './components/DataTable';
import Header from './components/Header';
import SearchInput from './components/SearchInput';
import EntryFilters from './components/EntryFilters';

function App() {
  return (
    <div className="App">
      <Provider>
        <Header />
        <SearchInput />
        <EntryFilters />
        <Table />
      </Provider>
    </div>
  );
}

export default App;
