const { expect, assert } = require('chai');
const replace = require('../src/replace');

describe('test replace', () => {
    it('should replace value', () => {
        const value = replace('My name is ${name}', { key: 'name', value: 'Jhon' });
        assert.equal(value, 'My name is Jhon');
    });

    it('should not replace value', () => {
        const value = replace('My name is ${na}', { key: 'name', value: 'Jhon' });
        assert.equal(value, 'My name is ${na}');
    });

    it('should throw exception', () => {
        expect(() => replace(null, { key: 'name', value: 'Jhon' })).to.throw();
    });
});