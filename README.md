# react-use-copy

> A lightweight React hook for copying text to the clipboard with TypeScript support.

![npm](https://img.shields.io/npm/v/react-use-copy)
![license](https://img.shields.io/npm/l/react-use-copy)
![typescript](https://img.shields.io/badge/TypeScript-Ready-blue)

## 🚀 Live Demo

Try it instantly in your browser.

- **CodeSandbox:** https://codesandbox.io/p/sandbox/react-use-copy-xnxtvg

---

## Features

- 🚀 Lightweight
- 📋 Uses the native Clipboard API
- ⚛️ React Hooks
- 📝 Full TypeScript support
- 🎯 Simple API
- 🌳 Tree-shakeable
- ❌ Zero dependencies
- 🔄 Configurable reset timeout
- ✅ Success & Error callbacks

---

## Installation

```bash
npm install react-use-copy
```

or

```bash
yarn add react-use-copy
```

or

```bash
pnpm add react-use-copy
```

---

## Basic Usage

```tsx
import { useCopy } from "react-use-copy";

export default function App() {
  const { copy, copied } = useCopy();

  return (
    <button onClick={() => copy("Hello World!")}>
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
```

---

## Coupon Code Example

```tsx
import { useCopy } from "react-use-copy";

export default function Coupon() {
  const { copy, copied } = useCopy({
    timeout: 2000,
  });

  return (
    <div>
      <h2>20% OFF</h2>

      <p>
        Coupon Code: <strong>SAVE20</strong>
      </p>

      <button onClick={() => copy("SAVE20")}>
        {copied ? "Copied!" : "Copy Coupon"}
      </button>
    </div>
  );
}
```

---

## API

### useCopy(options?)

```ts
const { copy, copied, error, reset } = useCopy(options);
```

### Options

| Property  | Type                   | Default | Description                      |
| --------- | ---------------------- | ------- | -------------------------------- |
| timeout   | number                 | 1500    | Reset copied state after timeout |
| onSuccess | () => void             | -       | Called after successful copy     |
| onError   | (error: Error) => void | -       | Called if copy fails             |

### Returns

| Property | Type                                 | Description                  |
| -------- | ------------------------------------ | ---------------------------- |
| copy     | `(text: string) => Promise<boolean>` | Copy text to clipboard       |
| copied   | boolean                              | Indicates successful copy    |
| error    | Error \| null                        | Last clipboard error         |
| reset    | () => void                           | Reset copied and error state |

---

## 🌐 Browser Support

Works in all modern browsers supporting the Clipboard API.

- Chrome
- Edge
- Firefox
- Safari

---

## 🤝 Contributing

Issues and pull requests are welcome.

If you find a bug or have a feature request, please open an issue.

---

## ⭐ Support

If you find this package useful, please consider giving it a ⭐ on GitHub.
