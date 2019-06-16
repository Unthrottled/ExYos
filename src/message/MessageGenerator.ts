import MessageDictonary from './MessageDictonary';

const bounds = MessageDictonary.length;

export const messageGenerator = (userName: string): string => {
  const randoIndex = Math.floor(Math.random() * bounds);
  const randoMessage = MessageDictonary[randoIndex];
  return randoMessage.replace('%name%', userName);
};
