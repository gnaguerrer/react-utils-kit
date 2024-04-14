# useIpAddress Hook

This custom hook allows you to retrieve the IP address of the client using an external API. It fetches the IP address from the [ipecho](https://ipecho.net/).

## Usage

```jsx
import { useIpAddress } from "./useIpAddress";

function MyComponent() {
  const { getIpAddress, ipAddress, isLoading } = useIpAddress();

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>IP Address: {ipAddress}</p>
          <button onClick={getIpAddress}>Refresh IP Address</button>
        </div>
      )}
    </div>
  );
}
```

## Return

| Property       | Type       | Description                                        |
| -------------- | ---------- | -------------------------------------------------- |
| `getIpAddress` | `function` | A function to fetch the IP address asynchronously. |
| `ipAddress`    | `string`   | The IP address of the client.                      |
| `isLoading`    | `boolean`  | Indicates whether the IP address is being fetched. |
