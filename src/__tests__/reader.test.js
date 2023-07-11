import read from '../reader';

test('should return array buffer', async () => {
  expect(await read()).toBeInstanceOf(ArrayBuffer);
});
