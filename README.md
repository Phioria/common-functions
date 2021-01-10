# common-functions

This is a library primarily for my personal use.  It is very limited in scope at the moment, and isn't intended for wide usage.  This is my first NPM release, and it is intended primarily as a learning exercise for me that will hopefully have continuing functionality as well.

## Version 0.0.1

Version 0.0.1 include just 2 functions, moneyNumericToString() and moneyStringToNumeric().

## Installation

Use NPM to install:

```bash
npm install [future-home-of-link]
```

## Usage

```js script
const PhioFunctions = require('phio-functions');

console.log(PhioFunctions.moneyNumericToString(1234)); // logs "$1,234.00"
console.log(PhioFunctions.moneyNumericToString(1234.5234)); // logs "$1,234.52"
console.log(PhioFunctions.moneyNumericToString("1234")); // logs NaN

console.log(PhioFunctions.moneyStringToNumeric("$1,234.00")); // logs 1234
console.log(PhioFunctions.moneyStringToNumeric("1234")); //logs 1234
console.log(PhioFunctions.moneyStringToNumeric(1234)); //logs 0
```

## Support

Feel free to contact me at phioria@gmail.com with questions/suggestions

## Contributing

On the off chance that this gets used by anyone else, pull request are welcome.  Not expecting this to get a lot of use outside of my own personal projects.

## License
[MIT](https://choosealicense.com/licenses/mit/)