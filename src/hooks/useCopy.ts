import { useCallback, useEffect, useRef, useState } from "react";
import { copyToClipboard } from "../utils/clipboard";
import type { UseCopyOptions, UseCopyReturn } from "../types";

export function useCopy(options: UseCopyOptions = {}): UseCopyReturn {
  const { timeout = 1500, onSuccess, onError } = options;

  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCopyTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const reset = useCallback(() => {
    clearCopyTimer();
    setCopied(false);
    setError(null);
  }, [clearCopyTimer]);

  const copy = useCallback(
    async (text: string): Promise<boolean> => {
      clearCopyTimer();

      try {
        await copyToClipboard(text);

        setCopied(true);
        setError(null);

        onSuccess?.();

        timerRef.current = setTimeout(() => {
          setCopied(false);
          timerRef.current = null;
        }, timeout);

        return true;
      } catch (err) {
        clearCopyTimer();

        const errorObj =
          err instanceof Error ? err : new Error("Failed to copy text.");

        setCopied(false);
        setError(errorObj);

        onError?.(errorObj);

        return false;
      }
    },
    [timeout, onSuccess, onError, clearCopyTimer]
  );

  useEffect(() => {
    return () => {
      clearCopyTimer();
    };
  }, [clearCopyTimer]);

  return {
    copy,
    copied,
    error,
    reset,
  };
}
