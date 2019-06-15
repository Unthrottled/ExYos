import {Command} from '../Command';
import {suddenlyPieces} from './Suddenly';

const defaultPhrase = '';

const renderSuddenly = phrase => {
  return Promise.resolve(suddenlyPieces
    .map((piece, index) => `${piece} ${(phrase.charAt(index) || '').toUpperCase()}`.trimRight())
    .join('\n'));
};

export const suddenlyCommand: Command = userArguments => {
  const phrase = userArguments || defaultPhrase;
  return renderSuddenly(phrase.toLocaleUpperCase());
};
