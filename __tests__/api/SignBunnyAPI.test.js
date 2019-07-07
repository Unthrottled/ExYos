import {processSignBodyRequest} from "../../src/api/sign/SignCommandHandler";

describe('Sign Bunny API', () => {
  it('should throw a fit when given nothing', async () => {
    const request = {};
    try {
      await processSignBodyRequest(request);
      fail();
    } catch (e) {

    }
  });
  it('should throw a fit when given empty body', async () => {
    const request = {
      body: {}
    };
    try {
      await processSignBodyRequest(request);
      fail();
    } catch (e) {

    }
  });
  it('should return expected result when given words', async () => {
    const request = {
      body: {
        signWords: 'Everybody Wang Chung Tonight'
      }
    };
    const response = await processSignBodyRequest(request);
    expect(response).toEqual(
      `_____________________________
|  EVERYBODY WANG CHUNG     |
|  TONIGHT                  |
_____________________________
      (\\__/) ||
      (•ㅅ•) ||
      / 　 づ
`);
  });
});
