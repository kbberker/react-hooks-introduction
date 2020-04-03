import React, { useState } from 'react';

import CharPicker from './components/CharPicker';
import Character from './components/Character';

const App = props => {
  // state doesn't need to be an object it can be whatever you want
  const [chosenSide, setChosenSide] = useState('light');

  const [selectedCharacter, setSelectedCharacter] = useState(1);

  const [destroyed, setDestroyed] = useState(false);

  const sideHandler = side => {
   setChosenSide(side);
  };

  const charSelectHandler = event => {
    const charId = event.target.value;
   setSelectedCharacter(charId);
  };

  const destructionHandler = () => {
   setDestroyed(true);
  };


    let content = (
      <React.Fragment>
        <CharPicker
          side={chosenSide}
          selectedChar={selectedCharacter}
          onCharSelect={charSelectHandler}
        />
        <Character selectedChar={selectedCharacter} />
        {/* Apparently the "this" needs to stay here */}
        <button onClick={sideHandler.bind(this, 'light')}>
          Light Side
        </button>
        <button onClick={() => sideHandler('dark')}>Dark Side</button>
        {chosenSide === 'dark' && (
          <button onClick={destructionHandler}>DESTROY!</button>
        )}
      </React.Fragment>
    );

    if (destroyed) {
      content = <h1>Total destruction!</h1>;
    }
    return content;

}

export default App;
