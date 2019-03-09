/**
 *
 * @param max
 * @param min
 * @returns {number}
 */
function generateRandomNumber (max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}
