const upsideDownDictionary = require('./dictionary');

const flipWord = (workToFlip) => {
  let characters = workToFlip.split("");
  return characters.map(character => upsideDownDictionary[character] || upsideDownDictionary[character.toLocaleLowerCase()] || character)
    .reduce((message, character)=> character + message, '');
};


module.exports = {
  flipWord
};
