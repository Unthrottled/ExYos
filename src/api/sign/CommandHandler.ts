import {signCommand} from '../../sign/SignCommand';
import teapot from '../../Teapot';

const processRequest = (request): Promise<string> => {
  console.log(request);
  return signCommand(request.signWords);
};

const handler = (request, response) => {
  processRequest(request).then(responseBody => {
    response.set('Content-Type', 'text/plain');
    response.status(200)
      .send(responseBody);
  })
    .catch(() => {
      response.status(418).end(teapot);
    });
};

export default handler;
