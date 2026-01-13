// SCREAMING_SNAKE_CASE
// Given a string representing a variable name, return the variable name converted to SCREAMING_SNAKE_CASE.

// The given variable names will be written in one of the following formats:

// camelCase
// PascalCase
// snake_case
// kebab-case
// In the above formats, words are separated by an underscore (_), a hyphen (-), or a new word starts with a capital letter.

// To convert to SCREAMING_SNAKE_CASE:

// Make all letters uppercase
// Separate words with an underscore (_)

// function toScreamingSnakeCase(variableName) {
//   console.log(variableName);
//   const arr = variableName.split('');
//   const result = [];

//   const regex = /[A-Z_-\s]/;
//   const tester = variableName.replace(regex, '_');

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].match(regex)) {
//       console.log('Match!');
//       result.push['_'];
//       //    result.push(arr[i])
//     }
//     result.push(arr[i]);
//   }

//   console.log(result);
//   return variableName;
// }

// function toScreamingSnakeCase(variableName) {
//   console.log(variableName);
//   const arr = variableName.split('');
//   const result = [];

//   const regex = /[A-Z_-\s]/;
//   const tester = variableName.replace(regex, '_');

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].match(regex)) {
//       console.log('Match!');
//       result.push('_');
//       //    result.push(arr[i])
//     }
//     result.push(arr[i].toUpperCase());
//   }

//   console.log(result);
//   // return variableName;
//   return result.join('');
// }

// function toScreamingSnakeCase(variableName) {
//   return (
//     variableName
//       // 1. Insert an underscore before any capital letter
//       // but only if its not at the start
//       .replace(/([a-z])([A-Z])/g, '$1_$2')

//       // 2. Convert hyphens to underscores
//       .replace(/-/g, '_')

//       // 3. Convert the whole string to uppercase
//       .toUpperCase()
//   );
// }

function toScreamingSnakeCase(variableName) {
  return (
    variableName
      // Split at hyphens, underscores, OR right before a Capital letter
      .split(/[-_]|(?=[A-Z])/)
      // Filter out any empty strings (to prevent underscore at start)
      .filter((word) => word !== '')
      // Join with underscores and uppercase everything
      .join('_')
      .toUpperCase()
  );
}
