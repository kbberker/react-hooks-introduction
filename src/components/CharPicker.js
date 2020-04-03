import React, { useState, useEffect } from 'react';
import { useHTTP } from '../hooks/http';

import './CharPicker.css';

const CharPicker = props => {
  const [isLoading, fetchedData] = useHTTP('https://swapi.co/api/people', []);
  const selectedCharacters = fetchedData.results.slice(0, 5);

  setIsLoading(false);
  setLoadedChars(
    selectedCharacters.map((char, index) => ({
    name: char.name,
    id: index + 1
  })))

    let content = <p>Loading characters...</p>;

    if (
      !isLoading &&
      loadedChars &&
      loadedChars.length > 0
    ) {
      content = (
        <select
          onChange={props.onCharSelect}
          value={props.selectedChar}
          className={props.side}
        >
          {loadedChars.map(char => (
            <option key={char.id} value={char.id}>
              {char.name}
            </option>
          ))}
        </select>
      );
    } else if (
      !isLoading &&
      (!loadedChars || loadedChars.length === 0)
    ) {
      content = <p>Could not fetch any data.</p>;
    }
    return content;

}

export default CharPicker;
