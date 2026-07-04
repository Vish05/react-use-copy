export interface UseCopyOptions {
  /**
   * Time in milliseconds before the `copied` state resets.
   * @default 1500
   */
  timeout?: number;

  /**
   * Called after a successful copy operation.
   */
  onSuccess?: () => void;

  /**
   * Called when the copy operation fails.
   */
  onError?: (error: Error) => void;
}

export interface UseCopyReturn {
  /**
   * Copies the provided text to the clipboard.
   *
   * @returns `true` if the copy succeeds, otherwise `false`.
   */
  copy: (text: string) => Promise<boolean>;

  /**
   * Indicates whether the last copy operation was successful.
   */
  copied: boolean;

  /**
   * The last successfully copied text.
   *
   * Returns `null` if nothing has been copied yet
   * or after calling `reset()`.
   */
  copiedText: string | null;

  /**
   * The last error encountered during a copy operation.
   */
  error: Error | null;

  /**
   * Resets the `copied`, `copiedText`, and `error` states.
   */
  reset: () => void;
}
