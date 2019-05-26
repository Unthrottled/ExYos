import {signPieces} from "./Sign";
import {Command} from "../Command";

const SIGN_PADDING = 2;
const defaultPhrase = 'Turn down for what?';

const padding = Array(SIGN_PADDING).fill('').map(() => ' ').join('');
const signStartPadding = '|' + padding;
const signWidths = [
  {
    predicate: number => number < 25,
    value: 15,
  },
  {
    predicate: number => number < 50,
    value: 25,
  },
  {
    predicate: number => number < 200,
    value: 50,
  },
  {
    predicate: number => number <= 400,
    value: 75,
  },
  {
    predicate: number => number > 400,
    value: 100,
  }
];
const findMaxSignWidth = phraseLength =>
  signWidths.find(signWidth => signWidth.predicate(phraseLength)).value;

const constructSentences = (max, words, length) => {
  const signWidth = findMaxSignWidth(length);
  const {sentences, currentSentence} =
    words.reduce((accum, word) => {
      const wordLength = word.length;
      const newSentenceLength = accum.currentSentence.length + wordLength;
      if (newSentenceLength > signWidth) {
        const newSentence = accum.currentSentence.trimLeft();
        accum.sentences.push(newSentence);
        const sentenceLength = newSentence.length;
        if (sentenceLength > accum.maxSentenceLength) {
          accum.maxSentenceLength = sentenceLength
        }
        accum.currentSentence = ''
      }

      accum.currentSentence += ` ${word}`;

      return accum;
    }, {
      currentSentence: '',
      maxSentenceLength: 0,
      sentences: [],
    });
  sentences.push(currentSentence.trimLeft());
  return {
    sentences,
    signWidth
  };
};

const renderSign = phrase => {
  const {max, words, length} =
    phrase.split(' ').reduce((accum, word) => {
      const wordLength = word.length;
      if (wordLength > accum.max) {
        accum.max = wordLength
      }
      accum.words.push(word);
      accum.length += wordLength;
      return accum;
    }, {
      max: 0,
      length: 0,
      words: []
    });

  const {sentences, signWidth} = constructSentences(max, words, length);
  const paddedSignTopper = Array(signWidth + SIGN_PADDING * 2)
    .fill('').map(() => '_').join('');
  const maxSentenceLength = paddedSignTopper.length;
  const signSegments = sentences.map(sentence => {
    const sentenceLength = sentence.length + signStartPadding.length;
    const endPaddingLength = maxSentenceLength - sentenceLength - 1;
    const endPadding = Array(endPaddingLength).fill('').map(() => ' ').join('');
    return `${signStartPadding}${sentence}${endPadding}|`;
  });
  const sign = [
    paddedSignTopper,
    ...signSegments,
    paddedSignTopper
  ].join('\n');

  return {
    sign
  };
};
const bunnyPostCenter = 8;
const renderSignBunny = phrase => {
  const {sign} = renderSign(phrase);
  const signLength = sign.indexOf('\n');
  const bunnyCenteringPadding = Math.floor(signLength/2) - bunnyPostCenter;
  const bunnyPadding = Array(bunnyCenteringPadding).fill('').map(()=>' ').join('');
  const bunny = signPieces
    .map(bunnyPart => `${bunnyPadding}${bunnyPart}`)
    .join('');
  const signBunny =
    `\`\`\`${sign}
${bunny}\`\`\``;
  return Promise.resolve(signBunny)
};

export const signCommand: Command = userArguments => {
  const phrase = userArguments || defaultPhrase;
  return renderSignBunny(phrase.toLocaleUpperCase());
};
