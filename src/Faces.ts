export const YELLING = 'YELLING';
export const LOOK = 'LOOK';
export const RAGE = 'RAGE';
export const ALARMED = 'ALARMED';
export const LENNY = 'LENNY';
export const U_CANT_BE_SRS = 'U_CANT_BE_SRS';
export const SOLEMN = 'SOLEMN';

export const getFace = faceType => {
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
