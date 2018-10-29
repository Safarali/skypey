import React, { Component } from 'react';
import Main from './Main';
import Sidebar from './Sidebar';
import logo from './logo.svg';
import './App.css';

const App = () => (
    <div className="App">
        <Sidebar/>
        <Main/>
    </div>
);

export default App;
