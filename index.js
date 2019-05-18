const jsonIterator = require('./src/jsonIterator');
const replace = require('./src/replace');

function parse(json) {
    if (typeof json === 'string') {
        return JSON.parse(json);
    } else if (typeof json === 'object' && !Array.isArray(json)) {
        return JSON.parse(JSON.stringify(json));
    }

    return null;
}

/**
 * 
 * @param {string | {}} json Json
 * @param {string | {}} keyValuePairs Json
 * 
 * @description It replaces all ocurrences of values in json 
 */
function injectByKeyValuePairs(json, keyValuePairs) {
    let jsonAux = parse(json);
    if (!jsonAux) throw new Error('json is not a valid json or object');
    let keyValuePairsAux = parse(keyValuePairs);
    if (!keyValuePairsAux) throw new Error('keyValuePairs is not a valid json or object');

    const keys = Object.keys(keyValuePairsAux);
    jsonAux = jsonIterator(jsonAux, function (key, value) {
        for (let i = 0; i < keys.length; i += 1) {
            value = replace(value, { key: keys[i], value: keyValuePairsAux[keys[i]] })
        }
        return value;
    });

    return jsonAux;
}

module.exports = injectByKeyValuePairs;
