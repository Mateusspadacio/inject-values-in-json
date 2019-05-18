/**
 * @param {string} str Json attribute value
 * @param {string} key Key to search
 * 
 * @returns {boolean}
 */
module.exports = function(str, key) {
    let regexp = new RegExp(`\\$\\{${key}\\}`, 'g');
    return regexp.exec(str);
}
