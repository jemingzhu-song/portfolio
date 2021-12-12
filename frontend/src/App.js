import './App.css';
import HomePage from './components/HomePage';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navigation />
        <Switch>
          <Route path='/' exact component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
