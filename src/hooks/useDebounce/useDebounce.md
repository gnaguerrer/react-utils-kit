# useDebounce

React hook that debounces a string value. It takes two parameters: the value to debounce and the delay in milliseconds. It returns the debounced value and a loading indicator. This hook is useful for delaying actions triggered by user input, such as search queries.

## Usage

```typescript
const [debouncedValue, isLoading] = useDebounce(value, 400);
```

### Params

| Property | Description            | Type     | Default |
| -------- | ---------------------- | -------- | ------- |
| value    | The value to debounce. | `string` | -       |
| delay    | Delay in milliseconds. | `number` | 500     |

### Returns

| Property       | Description                                              | Type      |
| -------------- | -------------------------------------------------------- | --------- |
| debouncedValue | The debounced value of the input `value`.                | `string`  |
| isLoading      | Loading indicator indicating if debounce is in progress. | `boolean` |
