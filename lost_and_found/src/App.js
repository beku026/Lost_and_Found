import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Content from './components/Pages/Content/Content';
import Context from './Context';

function App() {
  const [request, setRequest ] = useState([]);
  const [autorizationObj, setAutorizationObj] = useState({
    email: '',
    password: '',

  });
  const [profileObj, setProfileObj] = useState({
    
  })

  const url = '';

  async function getRequest() {
    await axios.get(url)
      .then(res => setRequest(res.data))
  }

  async function getPost(obj) {
    await axios.post(url, obj)
      .then(res => setRequest(res.data))
  }
  async function getPatch(obj, id) {
    await axios.post(url + `/${id}`, obj)
      .then(res => setRequest(res.data))
  } 
  
  async function getDelete(id) {
    await axios.post(url + `/${id}`)
      .then(res => setRequest(res.data))
  }

  const value = {
    autorizationObj, setAutorizationObj,
    getPost,
    getRequest,
    getDelete,
    getPatch,
  }
  return (
    <>
      <Context.Provider value={value}>
        <Content/>
      </Context.Provider>
    </>
  );
}

export default App;
