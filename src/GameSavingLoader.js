/* eslint-disable class-methods-use-this */
import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  async load() {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          const buffer = await read();
          const string = await json(buffer);
          resolve(JSON.parse(string));
        } catch (err) {
          reject(err);
        }
      })();
    });
  }
}
