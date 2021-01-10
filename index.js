moneyNumericToString = function(input) {
  // input = number that might or might not include decimal places
  // output = string that represents the number as US currency with a leading $ and commas as separators
  // If input is not a number, output returns NaN

  if (isNaN(input)) {
    return NaN;
  } else {
    const decimalPlaces = 2;
    const thousandsSeparator = ',';
    
    let number = input.toFixed(decimalPlaces);

    // If there are more than 6 characters in the new string, then we need to add commas
    if (number.length > 6) { // Including the ".00" we've either added or trimmed down to
      const numPrefixLength = number.length % 3;
      const numCommas = ((number.length - numPrefixLength) / 3) - 1; // -1 so we don't include the ending ".00"
      const numPrefix = number.slice(0, numPrefixLength);
      const numSuffixBase = number.slice(numPrefixLength);
      let numSuffix = "";
      for (let i = 0; i < numCommas; i++) {
        const index = i * 3;
        if (numPrefixLength == 0 && i == 0) {
          numSuffix = numSuffix + numSuffixBase.slice(index, index + 3);
        } else {
          numSuffix = numSuffix + thousandsSeparator + numSuffixBase.slice(index, index + 3);
        }
      }
      numSuffix = numSuffix + numSuffixBase.slice(-3);

      number = numPrefix + numSuffix;
    }
    number = '$' + number;
    return number;
  }
};

moneyStringToNumeric = function(input) {
  // input = string that might include a "$" prefix, 0 or more "," separating numbers, and a "." in the decimal spot
  // output = return a numeric without the extra characters.
  // If input is not a string, output returns 0
  // If input is a string but doesn't represent a number, output returns NaN

  return typeof(input) === "string" ? Number(input.trim().replace("$", "").replaceAll(",", "")) : 0;
}

export {
  moneyNumericToString,
  moneyStringToNumeric
};