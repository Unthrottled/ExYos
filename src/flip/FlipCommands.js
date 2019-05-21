const {flipWord} = require('./WordFlip');

const extractFlipExpressionParts = flipArguments => {
  const face = '°□°' || 'ಠ_ಠ' || 'ಠ益ಠ' || '◉Д◉';
  const velocity = '︵' || '彡';
  const flippedItem = flipWord(flipArguments) || '┻━┻' || '/(.□ . \\)';
  return {
    face,
    velocity,
    flippedItem
  }
};
const extractUnFlipExpressionParts = flipArguments => {
  const face = 'º _ º' || '°□°' || 'ಠ_ಠ' || 'ಠ益ಠ' || '◉Д◉';
  const unFlippedItem = flipArguments || '┻━┻' || '/(.□ . \\)';
  return {
    face,
    unFlippedItem
  }
};

const flipCommand = flipArguments => {
  const {face, velocity, flippedItem} = extractFlipExpressionParts(flipArguments);
  return Promise.resolve(`(╯${face})╯${velocity}${flippedItem}`);
};

const unFlipCommand = flipArguments => {
  const {face, unFlippedItem} = extractUnFlipExpressionParts(flipArguments);
  return Promise.resolve(`${unFlippedItem}ノ(${face}ノ)`);
};


module.exports = {
  flipCommand,
  unFlipCommand,
};
