import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={ Home } />
        <p>tentativa</p>
      </BrowserRouter>
    </div>
  );
}

export default App;
