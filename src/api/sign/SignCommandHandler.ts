import {signCommand, signCommandNonMarkdown} from '../../sign/SignCommand';
import teapot from '../../Teapot';

export const processSignBodyRequest = (request): Promise<string> => {
  const signWords = (request && request.body || {}).signWords;
  if (signWords) {
    return signCommandNonMarkdown(signWords);
  } else {
    return Promise.reject();
  }
};

const handler = (request, response) => {
  processSignBodyRequest(request).then(responseBody => {
    response.set('Content-Type', 'text/plain');
    response.status(200)
      .send(responseBody);
  })
    .catch(() => {
      response.set('Content-Type', 'text/plain');
      response.status(400).end(`
      Expected example request body of:
        {
          signWords: "Turn down for what?"
        }
      `);
    });
};

export default handler;
