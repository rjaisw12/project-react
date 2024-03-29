import React, { useState, useEffect } from 'react';

const LearnChinese = () => {
  const [sentenceWithMissingWord, setSentenceWithMissingWord] = useState('');
  const [translatedSentence, setTranslatedSentence] = useState('');
  const [characterOptions, setCharacterOptions] = useState([]);
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [wordsToGuess, setWordsToGuess] = useState([]);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch('https://apichinese.raphaeljaiswal.com/get-chinese-quiz');

      if (!response.ok) {
        throw new Error('Erreur réseau lors de la récupération des données.');
      }

      const data = await response.json();
      setSentenceWithMissingWord(data.sentenceWithMissingWord);
      setTranslatedSentence(data.translatedSentence);
      setCharacterOptions(data.characterOptions);
      setWordsToGuess(data.words_to_guess);
    } catch (error) {
      console.error("Il y a eu un problème avec l'opération fetch: ", error.message);
    }
  };


  const handleCharacterClick = (char) => {
    if (selectedCharacters.length < 2 && !selectedCharacters.includes(char)) {
      setSelectedCharacters([...selectedCharacters, char]);
    }
  };

  const checkAnswer = () => {
    if (JSON.stringify(selectedCharacters) === JSON.stringify(wordsToGuess)) {
      setFeedbackMessage('Well done!');
    } else {
      setFeedbackMessage('Wrong answer');
    }
  };

  const resetAnswer = () => {
    setSelectedCharacters([]);
    setFeedbackMessage('');
  };

  const loadNextSentence = () => {
    fetchData();
    resetAnswer();
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
      <button onClick={checkAnswer}>Check Answer</button>
      <button onClick={resetAnswer}>Try New Answer</button>
      <button onClick={loadNextSentence}>Next Sentence</button>
      <p>{feedbackMessage}</p>
    </div>
  );
};

export default LearnChinese;
