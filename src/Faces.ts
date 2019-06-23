export const YELLING = 'YELLING';
export const LOOK = 'LOOK';
export const RAGE = 'RAGE';
export const ALARMED = 'ALARMED';
export const LENNY = 'LENNY';
export const U_CANT_BE_SRS = 'U_CANT_BE_SRS';
export const SOLEMN = 'SOLEMN';
export const ANGUISH = 'ANGUISH';
export const SMILE = 'SMILE';
export const HAPPY = 'HAPPY';
export const PRETTY = 'PRETTY';
export const COOL = 'COOL';
export const STRAINED = 'STRAINED';
export const PUPPY = 'PUPPY';

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
    case ANGUISH:
      return 'ಥ_ಥ';
    case SMILE:
      return '◕ ◡ ◕';
    case HAPPY:
      return 'ᐛ';
    case PRETTY:
      return '✿◕‿◕';
    case COOL:
      return '-■_■';
    case STRAINED:
      return '‶⇀‸↼';
    case PUPPY:
      return '•ᴥ•';
  }
};
