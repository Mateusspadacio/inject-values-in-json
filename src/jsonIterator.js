function isInvalidValue(value) {
    if (!value || typeof value === 'number' || typeof value === 'boolean') return true;

    if (typeof value === 'object') {
        if (Array.isArray(value) && value.length === 0) return true;

        if (Object.keys(value).length === 0) return true;
    }

    return false;
}

/**
 * 
 * @param {string | {}} json json to iterate
 * @param {Function} callback(key, value)
 * 
 * key {String}: json attribute key
 * 
 * value {*}: json attribute value
 */
function jsonIterator(json, callback) {
    if (typeof json !== 'object') throw new Error('json is not an object');

    Object.keys(json).forEach(key => {

        if (isInvalidValue(json[key])) return;

        if (Array.isArray(json[key])) {
            json[key].forEach(o => jsonIterator(o, callback));
            return;
        }

        if (typeof json[key] === 'object') {
            jsonIterator(json[key], callback);
            return;
        }

        json[key] = callback(key, json[key]);
    });

    return json;
}

module.exports = jsonIterator;
