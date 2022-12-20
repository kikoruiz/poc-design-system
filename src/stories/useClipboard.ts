import { useState, useCallback, useEffect } from "react";
import copy from "copy-to-clipboard";

export function useClipboard(value: string) {
  const timeout = 1500;
  const [hasCopied, setHasCopied] = useState(false);

  const onCopy = useCallback(() => {
    setHasCopied(copy(value));
  }, [value]);

  useEffect(() => {
    let timeoutId: number | null = null;

    if (hasCopied) {
      timeoutId = window.setTimeout(() => setHasCopied(false), timeout);
    }

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [timeout, hasCopied]);

  return { onCopy, hasCopied };
}
