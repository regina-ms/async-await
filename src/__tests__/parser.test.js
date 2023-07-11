import json from '../parser';
import read from '../reader';

test('should return string', async () => {
  const data = read();
  expect(await data.then((result) => json(result))).toEqual('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
});
