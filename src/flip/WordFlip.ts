const upsideDownDictionary = require('./dictionary');

export const flipWord = (workToFlip) => {
  const characters = workToFlip.split('');
  return characters.map(character =>
    upsideDownDictionary[character] ||
    upsideDownDictionary[character.toLocaleLowerCase()] ||
    character)
    .reduce((message, character) => character + message, '');
};
