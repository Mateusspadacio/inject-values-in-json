const { expect, assert } = require('chai');
const jsonIterator = require('../src/jsonIterator');

describe('test jsonIterator', () => {
    it('should iterate json', () => {
        expect(() => jsonIterator({ name: 'jhon', info: { age: 48 } }, (key, value) => value)).not.throw();
    });

    it('should throw exception', () => {
        expect(() => jsonIterator(null, (key, value) => value)).to.throw();
    });
});