import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Drumpad from './components/Drumpad';

function App() {
  const [displayText, setDisplayText] = useState('');

  return (
    <div className="App">
      <h2 id="display">{displayText}</h2>
      <Drumpad setDisplayText={setDisplayText} textToDisplay='Dry_Ohh' src='https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3' keyCharacter = 'Q' />
    </div>
  );
}

export default App;
