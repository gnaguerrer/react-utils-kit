import axios from "axios";
import { Platform } from "react-native";
import semver from "semver";

interface VersionValue {
  version: string | null;
  url: string | null;
}

const getStoreVersion = async (
  bundleId: string
): Promise<VersionValue | null> => {
  let storeVersion = null;
  if (Platform.OS === "ios") {
    const appStoreResponse = await getIosVersion(bundleId);
    storeVersion = appStoreResponse;
  } else {
    const googlePlayResponse = await getAndroidVersion(bundleId);
    storeVersion = googlePlayResponse;
  }
  return storeVersion;
};

const getIosVersion = async (
  bundleId: string
): Promise<VersionValue | null> => {
  const url = `https://itunes.apple.com/lookup?lang=en&bundleId=${bundleId}&${Date.now()}`;
  const response = await axios(url);

  if (!response?.data?.results?.length) {
    return null;
  }

  const results = response?.data.results[0];

  return {
    version: results?.version ?? null,
    url:
      results?.trackViewUrl ??
      results?.artistViewUrl ??
      results?.sellerUrl ??
      url,
  };
};

const getAndroidVersion = async (
  bundleId: string
): Promise<VersionValue | null> => {
  const url = `https://play.google.com/store/apps/details?id=${bundleId}&${Date.now()}`;
  const response = await axios(url);

  if (response.status === 404) {
    return null;
  }

  const version =
    response?.data?.match?.(/\[\[\[['"]((\d+\.)+\d+)['"]\]\],/)?.[1] ?? null;

  return {
    version,
    url,
  };
};

const compareVersions = (
  localVersion: string,
  storeVersion: string
): semver.ReleaseType | null => {
  const isGreather = semver.gt(storeVersion, localVersion);

  const diff = semver.diff(storeVersion, localVersion);

  if (isGreather) {
    return diff;
  }

  return null;
};

export const versionCheck = {
  getStoreVersion,
  compareVersions,
};
