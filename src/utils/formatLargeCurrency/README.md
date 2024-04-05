# formatLargeCurrency Function

This function formats a large currency value into a more readable format by converting it into a shortened representation with a symbol indicating the magnitude (e.g., thousands, millions).

## Usage

```typescript
import { formatLargeCurrency } from "./utils";

const formattedValue1 = formatLargeCurrency(1234); // Output: "1.2k"
const formattedValue2 = formatLargeCurrency(5678901); // Output: "5.7M"
const formattedValue3 = formatLargeCurrency(9876.54, 2); // Output: "9.88k"
```

## Parameters

| Parameter | Type     | Description                                                            |
| --------- | -------- | ---------------------------------------------------------------------- |
| `value`   | _number_ | The value to be formatted as currency.                                 |
| `digits`  | _number_ | (optional) The number of digits after the decimal point. Default is 1. |

## Returns

| Type     | Description                   |
| -------- | ----------------------------- |
| _string_ | The formatted currency value. |
