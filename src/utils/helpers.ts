
export const numberFormat = (number: any, decPlaces: number) => {
  // 2 decimal places => 100, 3 => 1000, etc
  decPlaces = Math.pow(10, decPlaces);

  const abbrev = ["K", "M", "M", "T"];

  // Go through the array backwards, so we do the largest first
  for (let i = abbrev.length - 1; i >= 0; i--) {
    // Convert array index to "1000", "1000000", etc
    const size = Math.pow(10, (i + 1) * 3);

    // If the number is bigger or equal do the abbreviation
    if (size <= number) {
      // Here, we multiply by decPlaces, round, and then divide by decPlaces.
      // This gives us nice rounding to a particular decimal place.
      number = Math.round((number * decPlaces) / size) / decPlaces;

      // Handle special case where we round up to the next abbreviation
      if (number == 1000 && i < abbrev.length - 1) {
        number = 1;
        i++;
      }

      // Add the letter for the abbreviation
      number += abbrev[i];

      break;
    }
  }

  return number;
};

export const addDecimal = (value: string) => {
  const formattedString = numberFormat(Number(value), 2).toString();
  try {
    const abbrevList = ["K", "M", "M", "T"];
    const abbrev = abbrevList.find((a) => {
      formattedString.toLowerCase().includes(a.toLowerCase());
      return a;
    });
    const stringIndex = formattedString.indexOf(abbrev!);
    const valueWithoutAbbrev = formattedString.substring(0, stringIndex);
    const valueWithFixedDecimal = Number(valueWithoutAbbrev).toFixed(2);
    return valueWithFixedDecimal.concat(abbrev!);
  } catch (e) {
    return formattedString;
  }
};
