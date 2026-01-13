## Screaming Snake Case Converter

A robust JavaScript utility function that converts various naming conventions into `SCREAMING_SNAKE_CASE`. This is particularly useful for generating constant names, environment variables, or database keys from dynamic input.

### Features

The converter handles four major naming formats;

    -   camelCase -> `CAMEL_CASE`
    -   PascalCase -> `PASCAL_CASE`
    -   snake_Case -> `SNAKE_CASE`
    -   kebab-Case -> `KEBAB_CASE`

### Implementation Logic

The function uses a Regular Expression-based `split` strategy to identify word boundaries without losing characters.

    1. Split: It breaks the string at hyphens (`-`), underscores (`_`), or positions immediately followed by an uppercase letter (`(?=[A-Z])`).

    2. Filter: It removes empty strings to ensure that `PascalCase` (which starts with a capital) doesn't result in a leading underscore.

    3. Transform: It joins the remaining parts with an underscore and converts the entire string to uppercase.

### Usage

```JavaScript

/**
 * Converts a string to SCREAMING_SNAKE_CASE.
 * @param {string} variableName - The string to convert.
 * @returns {string} The converted SCREAMING_SNAKE_CASE string.
 */
function toScreamingSnakeCase(variableName) {
    return variableName
        .split(/[-_]|(?=[A-Z])/)
        .filter((word) => word !== "")
        .join('_')
        .toUpperCase();
}

// Examples:
console.log(toScreamingSnakeCase("camelCase"));       // "CAMEL_CASE"
console.log(toScreamingSnakeCase("PascalCase"));      // "PASCAL_CASE"
console.log(toScreamingSnakeCase("kebab-case"));      // "KEBAB_CASE"
console.log(toScreamingSnakeCase("already_snake"));   // "ALREADY_SNAKE"
```

### What I Learned

    1. The Power of "Lookaheads" in Regex
    I learned how to use Positive Lookaheads `(?=[A-Z])`. Unlike a normal split that consumes the character it matches, a lookahead is "zero-width". It allows you to find the boundary before a capital letter without deleting the capital letter itself. this is essential for handling `camelCase` and `PascalCase`.

    2. Strategic Filtering
    When splitting a string like `PascalCase` at every capital letter, the split often creates an empty string at the beginning of the resulting array (index`0`). By using `.filter((word) => word !== "")`, I learned how to clean up the array to prevent unwanted leading underscores like `_PASCAL_CASE`.

    3. Declaritive vs. Imperative Programming
    Initially, I approached this with a `for` loop (Imperative). While that worked, switching to a method chain of `.split().filter().join().toUpperCase()` (Declarative) made the code:
        - Easier to read: it tells a story of what is happening to the data.
        - More maintainable: It's fewer lines of code and handles edge cases like hyphens and underscores simultaneously.

    4. Handling Global Patterns
    I practiced using the `/g` flag in regex to ensure that all occurences of a character (like hyphens in `kebab-case-example`) are captured, not just the first one.
