import React from 'react';
import './App.css';
import Application from './component/application/Application';
import Skills from './component/skills/Skills';

function App() {
  return (
    <div className="App">
      <Application />
      <Skills skills={['HTML', 'CSS', 'JS']} />
    </div>
  );
}

export default App;
