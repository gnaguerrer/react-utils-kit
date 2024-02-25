# useMouseDown

Detects mouse clicks outside of a specified element. It takes two parameters: a callback function to execute when a click outside the element occurs (optional), and a dependency list for the useCallback hook (optional). It returns a ref object that should be attached to the element you want to monitor for clicks outside.

## Usage

```typescript
const MyComponent = () => {
  const handleClickOutside = () => {
    // Do something when click occurs outside of this component
  };

  const { ref } = useMouseDown(() => {
    handleClickOutside();
  }, []);

  return <div ref={ref}>{/* Content  */}</div>;
};
```

### Params

| Property | Description                                   | Type             | Default    |
| -------- | --------------------------------------------- | ---------------- | ---------- |
| callback | Function to execute when click occurs outside | `() => void`     | `() => {}` |
| deps     | Dependency list for useCallback               | `DependencyList` | `[]`       |

### Returns

| Property | Description                                | Type                  |
| -------- | ------------------------------------------ | --------------------- |
| ref      | Ref object to attach to the target element | `MutableRefObject<T>` |
