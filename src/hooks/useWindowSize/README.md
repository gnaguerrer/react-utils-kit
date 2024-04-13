# useWindowSize

This custom hook allows you to obtain the current size of the browser window in a React application. It provides the width and height of the window at all times, automatically updating when the browser window size changes.

## Usage

```jsx
import { useWindowSize } from "./useWindowSize";

function MyComponent() {
  const { windowWidth } = useWindowSize();

  return (
    <div>
      <p>Width: {windowWidth.width}px</p>
      <p>Height: {windowWidth.height}px</p>
    </div>
  );
}
```

## Return

| Property      | Type     | Description                                                   |
| ------------- | -------- | ------------------------------------------------------------- |
| `windowWidth` | `object` | Object containing the width and height of the browser window. |
|               |          | `width` : `number` - Current width of the browser window.     |
|               |          | `height` : `number` - Current height of the browser window.   |
