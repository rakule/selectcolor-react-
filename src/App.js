import React from 'react';
import './App.css';

import ColorPicker from './ColorPicker';


function App() {
  const [state, updateState] = React.useState('#FFF');

  const handleInput = (e) => {
    updateState(e.target.value);
  }
  
  
  return (
    
      <ColorPicker value={state} onChange={handleInput} />);
  
}

export default App;
