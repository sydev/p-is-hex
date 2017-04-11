# p-is-hex

[![Build Status](https://travis-ci.org/sydev/p-is-hex.svg?branch=master)](https://travis-ci.org/sydev/p-is-hex)

Checks if a string is a valid hex color code, promisified

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Changelog](#changelog)


## Installation 

```
$ npm install --save p-is-hex
```

Or if you prefer yarn:

```
$ yarn add p-is-hex
```

## Usage

```JavaScript
const is_hex = require('p-is-hex');

is_hex('#abc123')
  .then(result => console.log(result)) // true
  .catch(err => console.error(err));

```

## Development

```
$ npm test
```

## Changelog

- 1.0.0
  - Initial Release
