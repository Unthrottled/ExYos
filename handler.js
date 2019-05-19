'use strict';

const upsideDownDictionary = {
  a: '\u0250',
  b: 'q',
  c: '\u0254',
  d: 'p',
  e: '\u01DD',
  f: '\u025F',
  g: '\u0183',
  h: '\u0265',
  i: '\u0131',
  j: '\u027E',
  k: '\u029E',
  l: '\u05DF',
  m: '\u026F',
  n: 'u',
  p: 'd',
  q: 'b',
  r: '\u0279',
  t: '\u0287',
  u: 'n',
  v: '\u028C',
  w: '\u028D',
  y: '\u028E',
  "A":"\u2200",
  "C":"\u0186",
  "E":"\u018E",
  "F":"\u2132",
  "G":"\u05E4",
  "H":"H",
  "I":"I",
  "J":"\u017F",
  "L":"\u02E5",
  "M":"W",
  "N":"N",
  "P":"\u0500",
  "T":"\u2534",
  "U":"\u2229",
  "V":"\u039B",
  "Y":"\u2144",
  "1":"\u0196",
  "2":"\u1105",
  "3":"\u0190",
  "4":"\u3123",
  "5":"\u03DB",
  "6":"9",
  "7":"\u3125",
  "8":"8",
  "9":"6",
  "0":"0",
  '.': '\u02D9',
  '?': '\u00BF',
  '!': '\u00A1',
  '\'': ',',
  '[': ']',
  '(': ')',
  '{': '}',
  ']': '[',
  ')': '(',
  '}': '{',
  '<': '>',
  '>': '<',
  '_': '\u203E',
  ';': '\u061B',
  '\u203F': '\u2040',
  '\u2045': '\u2046',
  '\u2234': '\u2235',
  '&': '\u214b',
  '\"': '\u201e',
  ',': '\'',
  ' ': ' '
};

const flipWord = (workToFlip) => {
  let characters = workToFlip.split("");
  return characters.map(character => upsideDownDictionary[character] || upsideDownDictionary[character.toLocaleLowerCase()])
    .reduce((message, character)=> character + message, '');
};

module.exports.helloWorld = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  callback(null, response);
};
