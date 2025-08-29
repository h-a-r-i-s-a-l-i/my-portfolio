import React from 'react';
import './App.css';
import HeroStatement from './HeroStatement.jsx';
import Project from './Project.jsx';
import sprayinatorImg from './assets/Sprayinator.jpg';
import ChromeTabs from './Chrome-Tabs.jsx';
import Title from './Title.jsx';
import DashBoard from './dashboard.jsx';
import Introduction from './Introduction.jsx';



function App() {
  return (
    <body>
      <Title title="Welcome Agent" />
      <HeroStatement />
      <div className="App">
        <><ChromeTabs /></>
        <div className="introduction">
          <Introduction />
        </div>
        <div className="filing">
          <DashBoard date="06/13/2025" />
          <DashBoard title="Operation: Sprayinator" />
        </div>
      </div>
    </body>
  );
}

export default App;

