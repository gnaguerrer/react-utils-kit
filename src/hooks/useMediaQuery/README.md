# useMediaQuery

React hook that listens for changes in a media query and returns a boolean indicating whether the media query matches the current viewport size.

## Usage

```typescript
import { useMediaQuery } from "./useMediaQuery";

const Component = () => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const isMediumScreen = useMediaQuery(
    "(max-width: 1023px) and (min-width: 768px)"
  );
  const isSmallScreen = useMediaQuery("(max-width: 767px)");

  return (
    <div>
      {isLargeScreen && <p>This is a large screen.</p>}
      {isMediumScreen && <p>This is a medium screen.</p>}
      {isSmallScreen && <p>This is a small screen.</p>}
    </div>
  );
};
```

### Params

| Property   | Description                            | Type     | Default |
| ---------- | -------------------------------------- | -------- | ------- |
| mediaQuery | The media query to listen for changes. | `string` | -       |

### Returns

| Property | Description                                         | Type      |
| -------- | --------------------------------------------------- | --------- |
| matches  | Boolean indicating whether the media query matches. | `boolean` |
