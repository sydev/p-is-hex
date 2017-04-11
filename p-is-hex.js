(() => {
  'use strict';

  /**
   * p-is-hex
   * 
   * Checks if a string is a valid hex color code, promisified
   * 
   * @param {String} color_code
   * @return {Promise<Boolean>}
   */
  module.exports = (color_code) => {
    let regex = /^(#)?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/g,
      err     = null;

    // returns an error, if `color_code` is anything but a string
    if (typeof color_code !== 'string') err = new Error('Given color code is not a string.');
    if (err !== null) return Promise.reject(err);

    // Returns a resolved Promise with result
    return Promise.resolve(regex.test(color_code));
  };

})();
