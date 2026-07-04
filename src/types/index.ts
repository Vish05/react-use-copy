export interface UseCopyOptions {
  /**
   * Time in milliseconds before copied resets.
   * @default 1500
   */
  timeout?: number;

  /**
   * Called after successful copy.
   */
  onSuccess?: () => void;

  /**
   * Called when copy fails.
   */
  onError?: (error: Error) => void;
}

export interface UseCopyReturn {
  /**
   * Copy text to clipboard.
   */
  copy: (text: string) => Promise<boolean>;

  /**
   * Indicates whether the last copy succeeded.
   */
  copied: boolean;

  /**
   * Last copy error.
   */
  error: Error | null;

  /**
   * Reset copied and error state.
   */
  reset: () => void;
}
