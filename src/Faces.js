const YELLING = 'YELLING';
const LOOK = 'LOOK';
const RAGE = 'RAGE';
const ALARMED = 'ALARMED';
const LENNY = 'LENNY';
const U_CANT_BE_SRS = 'U_CANT_BE_SRS';
const SOLEMN = 'SOLEMN';

const getFace = faceType => {
  switch (faceType) {
    case YELLING:
      return '°□°';
    case LOOK:
      return 'ಠ_ಠ';
    case LENNY:
      return '͡° ͜ʖ ͡°';
    case RAGE:
      return 'ಠ益ಠ';
    case ALARMED:
      return '◉Д◉';
    case U_CANT_BE_SRS:
      return '●_●';
    case SOLEMN:
      return 'º _ º';
  }
};

module.exports = {
  YELLING,
  LOOK,
  RAGE,
  ALARMED,
  LENNY,
  U_CANT_BE_SRS,
  SOLEMN,
  getFace,
};
