import { useEffect, useState } from "react";

export const useIpAddress = (): {
  getIpAddress: () => Promise<string | null>;
  ipAddress: string;
  isLoading: boolean;
} => {
  const [ipAddress, setIpAddress] = useState<string>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getIpAddress = async (): Promise<string | null> => {
    try {
      setIsLoading(true);
      const response = await fetch("https://ipecho.net/plain");
      if (response) {
        const ip = await response.text();
        setIpAddress(ip);
        setIsLoading(false);
        return ip;
      }
      return null;
    } catch (error) {
      setIsLoading(false);
      return null;
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getIpAddress();
  }, []);

  return { getIpAddress, ipAddress, isLoading };
};
