/**
 * @param {string} str Json string attribute
 * 
 * @returns {string} With keys replaced
 */
module.exports = function (str, { key, value }) {
    let regexp = new RegExp(`\\$\\{${key}\\}`, 'g');
    return str.replace(regexp, value);
}
