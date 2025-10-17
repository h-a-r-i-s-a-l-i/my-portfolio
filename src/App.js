import React from 'react';
import './App.css';
import HeroStatement from './HeroStatement.jsx';
import Project from './Project.jsx';
import ChromeTabs from './Chrome-Tabs.jsx';
import Title from './Title.jsx';
import DashBoard from './dashboard.jsx';
import Introduction from './Introduction.jsx';
import MyPicture from './MyPicture.jsx';
import Skills from './Skills.jsx';

import { useRef } from 'react';



function App() {
  return (
    <body>
      <Title title="Welcome Agent" />
      <HeroStatement />
      <div className="App">
        <><ChromeTabs /></>
        <div className="introduction">
          <Introduction />
          <MyPicture />
        </div>
        <div className="filing">
          <DashBoard />
        </div>
        <div>

        </div>
      </div>
    </body>
  );
}

export default App;

