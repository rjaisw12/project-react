import React, { useState, useEffect } from 'react';

const LearnChinese = () => {
  const [sentenceWithMissingWord, setSentenceWithMissingWord] = useState('');
  const [translatedSentence, setTranslatedSentence] = useState('');
  const [characterOptions, setCharacterOptions] = useState([]);
  const [selectedCharacters, setSelectedCharacters] = useState([]);

  // Supposez que cette fonction fait un appel API pour obtenir les données
  const fetchData = () => {
    // Simuler l'appel API
    const data = {
      sentenceWithMissingWord: "Phrase avec des __ masqués",
      translatedSentence: "Traduction en français",
      characterOptions: ["a", "b", "c", "d", "e", "f", "g", "h"]
    };
    setSentenceWithMissingWord(data.sentenceWithMissingWord);
    setTranslatedSentence(data.translatedSentence);
    setCharacterOptions(data.characterOptions);
  };

  const handleCharacterClick = (char) => {
    if (selectedCharacters.length < 2 && !selectedCharacters.includes(char)) {
      setSelectedCharacters([...selectedCharacters, char]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="demo-container">
      <h1>Apprenez le chinois avec Harry Potter!</h1>
      <p>{sentenceWithMissingWord}</p>
      <p>{translatedSentence}</p>
      <div className="character-options">
        {characterOptions.map((char, index) => (
          <button key={index} onClick={() => handleCharacterClick(char)} disabled={selectedCharacters.includes(char)}>
            {char}
          </button>
        ))}
      </div>
      <div className="selected-characters">
        {selectedCharacters.map((char, index) => (
          <span key={index}>{char} </span>
        ))}
      </div>
    </div>
  );
};

export default LearnChinese;
