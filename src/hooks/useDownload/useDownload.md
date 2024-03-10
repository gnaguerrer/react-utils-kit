### useDownload Hook

A custom React hook for handling file downloads asynchronously using Axios. Provides functionality to initiate file downloads from a given URL. It handles the asynchronous download process and manages loading state.

#### Usage

```javascript
import { useDownload } from "./useDownload";

const YourComponent = () => {
  const { isLoading, handleDownload } = useDownload();

  const downloadFile = () => {
    const fileUrl = "your_file_url";
    const fileName = "desired_file_name";
    handleDownload(fileUrl, fileName);
  };

  return (
    <div>
      <button onClick={downloadFile} disabled={isLoading}>
        {isLoading ? "Downloading..." : "Download File"}
      </button>
    </div>
  );
};
```

### Params

| Property | Description                              | Type     | Default |
| -------- | ---------------------------------------- | -------- | ------- |
| url      | The URL of the file to be downloaded     | `string` | `-`     |
| name     | The desired name for the downloaded file | `string` | `-`     |

### Returns

| Property       | Description                                           | Type       |
| -------------- | ----------------------------------------------------- | ---------- |
| isLoading      | Indicates whether the download process is in progress | `boolean`  |
| handleDownload | Function to initiate the download process             | `function` |
