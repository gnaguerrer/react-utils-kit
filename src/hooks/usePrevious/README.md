# usePrevious

A custom React hook for accessing the previous value of a state variable in functional components.

## Usage

```typescript
import { useEffect, useRef } from "react";

export const usePrevious = <T>(state: T): T | undefined => {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = state;
  });

  return ref.current;
};
```

To use this hook in a component:

```typescript
import React, { useState } from "react";
import { usePrevious } from "./usePrevious";

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const previousCount = usePrevious(count);

  return (
    <div>
      <p>Current count: {count}</p>
      <p>
        Previous count: {previousCount !== undefined ? previousCount : "N/A"}
      </p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default MyComponent;
```

## Parameters

| Property | Description            | Type | Default |
| -------- | ---------------------- | ---- | ------- |
| state    | Current state to track | `T`  | -       |

## Returns

| Property      | Description                    | Type             |
| ------------- | ------------------------------ | ---------------- |
| previousValue | Current value of tracked state | `T \| undefined` |
