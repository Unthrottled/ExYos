const {flipWord} = require('./WordFlip');

const extractFlipExpressionParts = flipArguments => {
  return parseFlipArguments(flipArguments)
    .then(parsedArguments => {
      const face = '°□°' || 'ಠ_ಠ' || 'ಠ益ಠ' || '◉Д◉';
      const velocity = '︵' || '彡';
      const flippedItem = flipWord(flipArguments) || '┻━┻' || '/(.□ . \\)';
      return {
        face,
        velocity,
        flippedItem
      }
    });
};

// {
//   tip: 'aoeu',
//   failureResponse: 'You did it wrongS'
// }

const parseFlipArguments = flipArguments => {
  return Promise.resolve(flipArguments)
    .then(arguments => {
      return {
        flippedItem: {
          type: 'WORD'
        },
        velocity: {
          type: 'HARD'
        },
        face: {
          type: 'LOOK'
        },
      }
    });
};

const extractUnFlipExpressionParts = flipArguments => {
  return parseUnFlipArguments(flipArguments)
    .then(parsedArguments=>{
      const face = 'º _ º' || '°□°' || 'ಠ_ಠ' || 'ಠ益ಠ' || '◉Д◉';
      const unFlippedItem = flipArguments || '┳━┳' || '(*￣m￣)';
      return {
        face,
        unFlippedItem
      }
    });
};

const flipCommand = flipArguments => {
  return extractFlipExpressionParts(flipArguments)
    .then(({face, velocity, flippedItem})=>`(╯${face})╯${velocity}${flippedItem}`);
};

const unFlipCommand = flipArguments => {
  return extractUnFlipExpressionParts(flipArguments)
    .then(({face, unFlippedItem})=> `${unFlippedItem}ノ(${face}ノ)`);
};


module.exports = {
  flipCommand,
  unFlipCommand,
};
