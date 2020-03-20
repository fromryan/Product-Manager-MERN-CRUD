import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppComponent from './components/AppComponent';
import DetailComponent from './components/DetailComponent';
import UpdateComponent from './components/UpdateComponent';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
        <AppComponent path="/" />
        <DetailComponent path="/:id" />
        <UpdateComponent path="/:id/edit" />
      </Router>
      
    </div>
  );
}

export default App;
