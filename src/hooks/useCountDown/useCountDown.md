# useCountDown

React hook `useCountDown`, allows you to implement a countdown timer in React applications easily. It's useful for cases where you need to display a timer or perform actions after a certain amount of time.

## API

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
