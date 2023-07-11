import GameSavingLoader from '../GameSavingLoader';
import read from '../reader';

jest.mock('../reader.js');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should return an obj', async () => {
  try {
    const mySave = new GameSavingLoader();
    const result = await mySave.load();
    expect(result).toBeInstanceOf(Object);
  } catch (e) {
    console.log(e);
  }
});

test('should return a error', async () => {
  read.mockRejectedValue(new Error('something wrong'));
  try {
    const mySave = new GameSavingLoader();
    await mySave.load();
  } catch (e) {
    expect(e.message).toBe('something wrong');
  }
});
