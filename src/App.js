import React from 'react';

import Search from './pages/Search';

import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">

      <Search />

      <BrowserRouter>
        <Route path="/" component={ Home } />
      </BrowserRouter>

    </div>
  );
}

export default App;
