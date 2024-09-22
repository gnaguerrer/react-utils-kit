# maskText Function

This function formats a string of text by applying a given pattern, where the `#` symbol in the pattern is replaced by characters from the text.

## Usage

```typescript
const maskedPhoneNumber = maskText("5551234567", "(###) ###-####");
// Output: "(555) 123-4567"

const maskedCreditCard = maskText("1234567812345678", "#### #### #### ####");
// Output: "1234 5678 1234 5678"
```

## Parameters

| Parameter | Type     | Description                                                                                    |
| --------- | -------- | ---------------------------------------------------------------------------------------------- |
| `text`    | _string_ | The input string to be formatted.                                                              |
| `pattern` | _string_ | The pattern to apply, where `#` will be replaced by the corresponding character from the text. |

## Returns

| Type     | Description                                         |
| -------- | --------------------------------------------------- |
| _string_ | The formatted string based on the provided pattern. |
