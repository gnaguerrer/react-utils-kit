# useToggle

A custom React hook for toggling boolean state.

## Usage

```typescript
import { useToggle } from "./useToggle";

const MyComponent = () => {
  const { value, handleToggle } = useToggle(true);

  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>
      <p>Current state: {value ? "ON" : "OFF"}</p>
    </div>
  );
};
```

### Params

| Property     | Description                                       | Type      | Default |
| ------------ | ------------------------------------------------- | --------- | ------- |
| initialState | Initial state value (optional, defaults to false) | `boolean` | `false` |

### Returns

| Property     | Description                  | Type         |
| ------------ | ---------------------------- | ------------ |
| value        | Current state value          | `boolean`    |
| handleToggle | Function to toggle the state | `() => void` |
