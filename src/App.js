import React, {useState} from 'react';

import {Header} from "./components/header/header.jsx";
import {Content} from './components/Routes.jsx';

function App() {
    return (
      <div className="App">
        <Header/>
        <Content/>
      </div>
    );
}

export default App;