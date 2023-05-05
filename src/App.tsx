import React from 'react';
import './App.css';
import Application from './component/application/Application';
import Skills from './component/skills/Skills';
import Counter from './component/counter/Counter';

function App() {
  return (
    <div className="App">
      <Application />
      <Skills skills={['HTML', 'CSS', 'JS']} />
      <Counter />
    </div>
  );
}

export default App;
