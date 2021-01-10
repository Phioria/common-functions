# common-functions

This is a library primarily for my personal use.  It is very limited in scope at the moment, and isn't intended for wide usage.  This is my first NPM release, and it is intended primarily as a learning exercise for me that will hopefully have continuing functionality as well.

## Version 0.0.2

Version 0.0.2 includes only 2 functions, moneyNumericToString() and moneyStringToNumeric().

## Installation

Use NPM to install:

```bash
npm install phio-functions
```

## Usage

```js script
const PhioFunctions = require('phio-functions');
```

### moneyNumericToString()

This function takes a single numeric input and returns a string in USD currency format.  If given input is not numeric, the function will return NaN.

```js script
console.log(PhioFunctions.moneyNumericToString(1234)); // logs "$1,234.00"
console.log(PhioFunctions.moneyNumericToString(1234.5234)); // logs "$1,234.52"
console.log(PhioFunctions.moneyNumericToString("1234")); // logs NaN
```

### moneyStringToNumeric()

This function takes a single string expected to be USD currency and returns the numeric version of the in input.  If the input is not a string, the function returns 0.  If the input is a string, but that string doesn't represent a number, the function returns NaN.

```js script
console.log(PhioFunctions.moneyStringToNumeric("$1,234.00")); // logs 1234
console.log(PhioFunctions.moneyStringToNumeric("1234")); // logs 1234
console.log(PhioFunctions.moneyStringToNumeric(1234)); // logs 0
console.log(PhioFunctions.moneyStringToNumeric("Not-A-Number")); // logs NaN
```

## Support

Feel free to contact me at phioria@protonmail.com with questions/suggestions

## Contributing

On the off chance that this gets used by anyone else, pull request are welcome.  Not expecting this to get a lot of use outside of my own personal projects.

## License
[MIT](https://choosealicense.com/licenses/mit/)