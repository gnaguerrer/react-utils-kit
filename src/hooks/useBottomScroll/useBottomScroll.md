# useBottomScroll

React hook that detects when the bottom of a scrollable element is reached. It takes an optional initial state object with a parameter to specify the offset from the bottom. It returns a boolean indicating whether the end has been reached and a scroll event handler.

## Usage

```typescript
const MyComponent = () => {
  const { endReached, handleScroll } = useBottomScroll({ offsetBottom: 10 });

  return <div onScroll={handleScroll}>{/* Content  */}</div>;
};
```

### Params

| Property     | Description                                         | Type     | Default |
| ------------ | --------------------------------------------------- | -------- | ------- |
| offsetBottom | Offset from the bottom of the scrollable container. | `number` | `10`    |

### Returns

| Property     | Description                                   | Type                 |
| ------------ | --------------------------------------------- | -------------------- |
| endReached   | Boolean indicating whether the end is reached | `boolean`            |
| handleScroll | Scroll event handler                          | `ScrollEventHandler` |
