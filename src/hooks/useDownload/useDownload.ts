import axios from "axios";
import { useState } from "react";

export const useDownload = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async (url: string, name: string) => {
    setIsLoading(true);
    let anchor;
    try {
      const documentFile = await axios.get<Blob>(url, {
        responseType: "blob",
      });
      if (documentFile?.data) {
        anchor = document.createElement("a");
        anchor.href = URL.createObjectURL(documentFile?.data);
        anchor.target = "_blank";
        anchor.download = name;
        anchor.click();
      }
    } catch (error) {
      // Error handler
    } finally {
      anchor?.remove();
      setIsLoading(false);
    }
  };
  return { isLoading, handleDownload };
};
