# RN VersionCheck

This module provides functionalities for checking the version of a React Native mobile application on different platforms.

## Usage

```javascript
import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { versionCheck } from "./utils";

const ExampleComponent = () => {
  const [needUpdate, setNeedUpdate] = useState(false);

  const validateVersion = async (): Promise<void> => {
    const bundleId = "com.example.app";
    const currentVerion = "1.0.0";
    const storeVersion = await versionCheck.getStoreVersion(bundleId);
    if (storeVersion?.version) {
      const updateType = versionCheck.compareVersions(
        currentVerion,
        storeVersion.version
      );
      if (updateType !== null) {
        setNeedUpdate(true);
      } else {
        setNeedUpdate(false);
      }
    }
  };

  useEffect(() => {
    validateVersion();
  }, []);

  return (
    <View>
      <Text>Needs update {needUpdate}</Text>
    </View>
  );
};
```

## Methods

- **`getStoreVersion(bundleId: string)`** _(Promise<VersionValue \| null>)_ - Retrieves the version of the mobile application from the respective app store based on the platform.

- **`compareVersions(localVersion: string, storeVersion: string)`** _(semver.ReleaseType \| null)_ - Compares two versions of the mobile application.

## Dependencies

- axios
- semver
