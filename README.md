# react-use-copy

A simple, lightweight React hook to copy text to the clipboard with ease.

---

## Features

- 📋 Copy text to clipboard
- ⚡ Lightweight and fast
- ⏱ Auto reset with configurable timeout
- ✅ Success callback support
- ❌ Error handling support
- 🧠 Fully TypeScript supported
- 🔌 Works with React Hooks (16.8+)

---

## Installation

```bash
npm install react-use-copy
```

or

```bash
yarn add react-use-copy
```

# Coupon Code Example

Perfect for e-commerce websites.

```tsx
import { useCopy } from "react-use-copy";

export default function CouponCard() {
  const { copy, copied } = useCopy();

  const coupon = "SAVE20";

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: 8,
        padding: 20,
        maxWidth: 320,
      }}
    >
      <h3>20% OFF</h3>

      <p>
        Use coupon code:
        <strong> {coupon}</strong>
      </p>

      <button onClick={() => copy(coupon)}>
        {copied ? "Coupon Copied!" : "Copy Coupon"}
      </button>
    </div>
  );
}
```

## API

### `useCopy()`

Returns:

| Property | Type                              | Description                                    |
| -------- | --------------------------------- | ---------------------------------------------- |
| `copy`   | `(text: string) => Promise<void>` | Copies text to clipboard                       |
| `copied` | `boolean`                         | Indicates whether the last copy was successful |
| `error`  | `Error \| null`                   | Clipboard error, if any                        |

---

## Browser Support

Supports all modern browsers that implement the Clipboard API.
