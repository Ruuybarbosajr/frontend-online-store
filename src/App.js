import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import './index.css';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Route path="/" component={ Home } />
      </BrowserRouter>

    </div>
  );
}

export default App;
