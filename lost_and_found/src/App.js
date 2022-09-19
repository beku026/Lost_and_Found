import React from 'react';
import './App.css';
import Content from './components/Pages/Content/Content';
import Context from './Context';

function App() {
  const [autorization, setAutorization] = [
    {}
  ];
  const value = {}
  return (
    <>
      <Context.Provider value={value}>
        <Content/>
      </Context.Provider>
    </>
  );
}

export default App;
