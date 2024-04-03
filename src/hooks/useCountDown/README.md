# useCountDown

React hook `useCountDown`, allows you to implement a countdown timer. Support pause and reset actions

## Usage

```typescript
export const CountdownTimer = () => {
  const { counter, start, pause, reset } = useCountDown(60);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
```

### Params

| Property | Description                                                                                               | Type     | Default |
| -------- | --------------------------------------------------------------------------------------------------------- | -------- | ------- |
| total    | The total number of seconds for the countdown.                                                            | `number` | -       |
| ms       | (Optional) The interval in milliseconds between each decrement of the countdown timer. Default is 1000ms. | `number` | 1000    |

### Returns

| Property | Description                                                 | Type         |
| -------- | ----------------------------------------------------------- | ------------ |
| counter  | The current value of the countdown timer.                   | `number`     |
| start    | Function to start the countdown timer.                      | `() => void` |
| pause    | Function to pause the countdown timer.                      | `() => void` |
| reset    | Function to reset the countdown timer to its initial value. | `() => void` |
