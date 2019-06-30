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
export const HAPPY_LEFT = 'HAPPY_LEFT';
export const PRETTY = 'PRETTY';
export const PRETTY_LEFT = 'PRETTY_LEFT';
export const COOL = 'COOL';
export const COOL_LEFT = 'COOL_LEFT';
export const STRAINED = 'STRAINED';
export const STRAINED_LEFT = 'STRAINED_LEFT';
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
    case HAPPY_LEFT:
      return 'ᐖ';
    case PRETTY:
      return '✿◕‿◕';
    case PRETTY_LEFT:
      return '◕‿◕✿';
    case COOL:
      return '-■_■';
    case COOL_LEFT:
      return '■_■-';
    case STRAINED:
      return '‶⇀‸↼';
    case STRAINED_LEFT:
      return '⇀‸↼‶';
    case PUPPY:
      return '•ᴥ•';
  }
};
