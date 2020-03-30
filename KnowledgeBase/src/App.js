import React from 'react';
import './App.css';
import SymptomRouter from './content/SymptomRouter'


class App extends React.Component
{
  render()
  {
    return <div>
      <nav className="navbar navbar-expand-lg navbar-light"
           style={ { 'background': '#4a90E2', marginBottom: '2.5rem'} }>
        < span className="navbar-brand" style={ { color: 'white' } }>众阳知识库</span>
      </nav>
      <SymptomRouter />
    </div>
  }
}

export default App;
