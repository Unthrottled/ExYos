import {signCommand, signCommandNonMarkdown} from '../../sign/SignCommand';
import teapot from '../../Teapot';

const processRequest = (request): Promise<string> => {
  const signWords = (request && request.body || {}).signWords;
  if (signWords) {
    return signCommandNonMarkdown(signWords);
  } else {
    return Promise.reject();
  }
};

const handler = (request, response) => {
  processRequest(request).then(responseBody => {
    response.set('Content-Type', 'text/plain');
    response.status(200)
      .send(responseBody);
  })
    .catch(() => {
      response.set('Content-Type', 'text/plain');
      response.status(400).end(`
      Expected request body of:
        {
          signWords: "Turn down for what?"
        }
      `);
    });
};

export default handler;
