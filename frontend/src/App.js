import './App.css';
import HomePage from './components/HomePage';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import AboutPage from './components/AboutPage';
import ExperiencePage from './components/ExperiencePage';
import TechnologyPage from './components/TechnologyPage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navigation />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/about' exact component={AboutPage} />
          <Route path='/experience' exact component={ExperiencePage} />
          <Route path='/technology' exact component={TechnologyPage} />
          <Route path='/contact' exact component={ContactPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
