const hasKey = require('./src/hasKey');
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
    if (typeof keyValuePairs !== 'object' || Array.isArray(keyValuePairs)) {
        throw new Error('keyValuePairs is not a object');
    }

    let jsonAux = parse(json);
    if (!jsonAux) throw new Error('json is not a valid json or object');

    const keys = Object.keys(keyValuePairs);
    jsonAux = jsonIterator(jsonAux, function (key, value) {
        for (let i = 0; i < keys.length; i += 1) {

            let nvalue = keyValuePairs[keys[i]];

            if (typeof keyValuePairs[keys[i]] === 'function' && hasKey(value, keys[i])) {
                nvalue = keyValuePairs[keys[i]]();
            }

            value = replace(value, { key: keys[i], value: nvalue });
        }
        return value;
    });

    return jsonAux;
}

module.exports = injectByKeyValuePairs;
