(() => {
  'use strict';

  const is_hex = require('../p-is-hex');

  describe('is a valid hex code, returns true', () => {

    test('#fff', () => {
      return is_hex('#fff')
        .then(result => expect(result).toEqual(true))
        .catch(err => expect(err).toBeNull());
    });

    test('#ffffff', () => {
      return is_hex('#ffffff')
        .then(result => expect(result).toEqual(true))
        .catch(err => expect(err).toBeNull());
    });

    test('fff', () => {
      return is_hex('fff')
        .then(result => expect(result).toEqual(true))
        .catch(err => expect(err).toBeNull());
    });

    test('ffffff', () => {
      return is_hex('ffffff')
        .then(result => expect(result).toEqual(true))
        .catch(err => expect(err).toBeNull());
    });

  });

  describe('is not a valid hex code, returns false', () => {
    
    test('#f', () => {
      return is_hex('#f')
        .then(result => expect(result).toEqual(false))
        .catch(err => expect(err).toBeNull());
    });

    test('#ff', () => {
      return is_hex('#ff')
        .then(result => expect(result).toEqual(false))
        .catch(err => expect(err).toBeNull());
    });

    test('#ffff', () => {
      return is_hex('#ffff')
        .then(result => expect(result).toEqual(false))
        .catch(err => expect(err).toBeNull());
    });

    test('#fffff', () => {
      return is_hex('#fffff')
        .then(result => expect(result).toEqual(false))
        .catch(err => expect(err).toBeNull());
    });

    test('f', () => {
      return is_hex('f')
        .then(result => expect(result).toEqual(false))
        .catch(err => expect(err).toBeNull());
    });

    test('ff', () => {
      return is_hex('ff')
        .then(result => expect(result).toEqual(false))
        .catch(err => expect(err).toBeNull());
    });

    test('ffff', () => {
      return is_hex('ffff')
        .then(result => expect(result).toEqual(false))
        .catch(err => expect(err).toBeNull());
    });

    test('fffff', () => {
      return is_hex('fffff')
        .then(result => expect(result).toEqual(false))
        .catch(err => expect(err).toBeNull());
    });

    test('fffffff', () => {
      return is_hex('fffffff')
        .then(result => expect(result).toEqual(false))
        .catch(err => expect(err).toBeNull());
    });

    test('ggg', () => {
      return is_hex('ggg')
        .then(result => expect(result).toEqual(false))
        .catch(err => expect(err).toBeNull());
    });

    test('gggggg', () => {
      return is_hex('gggggg')
        .then(result => expect(result).toEqual(false))
        .catch(err => expect(err).toBeNull());
    });

    test('gff', () => {
      return is_hex('gff')
        .then(result => expect(result).toEqual(false))
        .catch(err => expect(err).toBeNull());
    });

    test('gffgff', () => {
      return is_hex('gffgff')
        .then(result => expect(result).toEqual(false))
        .catch(err => expect(err).toBeNull());
    });

  });

  describe('throws error', () => {
    
    test('["fff"]', () => {
      return is_hex(['fff'])
        .catch(err => expect(err).toEqual(new Error('Given color code is not a string.')));
    });

    test('{"hex-code": "fff"}', () => {
      return is_hex({'hex-code': 'fff'})
        .catch(err => expect(err).toEqual(new Error('Given color code is not a string.')));
    });

    test('100 (number)', () => {
      return is_hex(100)
        .catch(err => expect(err).toEqual(new Error('Given color code is not a string.')));
    });

    test('null', () => {
      return is_hex(null)
        .catch(err => expect(err).toEqual(new Error('Given color code is not a string.')));
    });

    test('true', () => {
      return is_hex(true)
        .catch(err => expect(err).toEqual(new Error('Given color code is not a string.')));
    });

  });

})();
