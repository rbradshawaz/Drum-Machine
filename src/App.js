import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Drumpad from './components/Drumpad';

function App() {

  const [displayText, setDisplayText] = useState('');

  return (
    <div className="App">
      <h2 id="display">{displayText}</h2>
      <Drumpad setDisplayText={setDisplayText} textToDisplay='Chord 1' src='https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3' keyCharacter = 'Q' />
      <Drumpad setDisplayText={setDisplayText} textToDisplay='Chord 2' src='https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3' keyCharacter = 'W' />
      <Drumpad setDisplayText={setDisplayText} textToDisplay='Chord 3' src='https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3' keyCharacter = 'E' />
      <Drumpad setDisplayText={setDisplayText} textToDisplay='Dry Ohh' src='https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3' keyCharacter = 'A' />
      <Drumpad setDisplayText={setDisplayText} textToDisplay='Clap' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' keyCharacter = 'S' />
      <Drumpad setDisplayText={setDisplayText} textToDisplay='Snare' src='https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3' keyCharacter = 'D' />
      <Drumpad setDisplayText={setDisplayText} textToDisplay='Kick' src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' keyCharacter = 'Z' />
      <Drumpad setDisplayText={setDisplayText} textToDisplay='Hi-Hat' src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' keyCharacter = 'X' />
      <Drumpad setDisplayText={setDisplayText} textToDisplay='Side Stick' src='https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3' keyCharacter = 'C' />
    </div>
  );
}

export default App;
