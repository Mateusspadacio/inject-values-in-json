const { expect, assert } = require('chai');
const injectBtKeyValuePairs = require('../index');

describe('test injectBtKeyValuePairs', () => {
    it('should inject values', () => {
        const json = { name: '${name}', date: 'date is ${date}' };
        const keyValuePairs = { name: 'Jhon', date: '24/10/1996' };
        const newJson = injectBtKeyValuePairs(json, keyValuePairs);
        expect(newJson).to.deep.equal({ name: 'Jhon', date: 'date is 24/10/1996' });
        expect(json).to.deep.equal(json);
    });

    it('should throw exception', () => {
        expect(() => injectBtKeyValuePairs({ name: '' }, 'wrong json :D')).to.throw();
    });
});