import React from 'react';
import './App.css';
import Application from './components/application/Application';
import Skills from './components/skills/Skills';
import Counter from './components/counter/Counter';
import { AppProviders } from './providers/AppProviders';
import { MuiMode } from './components/mui-mode/MuiMode';

function App() {
  return (
    <AppProviders>
      <div className="App">
        {/* <Application />
        <Skills skills={['HTML', 'CSS', 'JS']} />
        <Counter /> */}
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
