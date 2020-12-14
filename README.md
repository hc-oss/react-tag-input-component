# react-tag-input-component

lightweight component for tag(s) input

[![GitHub Actions Status](https://github.com/harshzalavadiya/react-tag-input-component/workflows/CI/badge.svg)](https://github.com/harshzalavadiya/react-tag-input-component/actions)
[![NPM](https://img.shields.io/npm/v/react-tag-input-component.svg)](https://npm.im/react-tag-input-component)
[![gzip](https://badgen.net/bundlephobia/minzip/react-tag-input-component@latest)](https://bundlephobia.com/result?p=react-tag-input-component@latest)

also see [multi select component](https://github.com/harshzalavadiya/react-multi-select-component)

## ✨ Features

- 🍃 Lightweight (2KB including styles 😎)
- 💅 Themeable
- ✌ Written w/ TypeScript
- 🗑️ Use Backspace to remove last tag

## 🔧 Installation

```bash
npm i react-tag-input-component    # npm
yarn add react-tag-input-component # yarn
```

## 📦 Example

![Example](preview.gif)

```tsx
import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";

const Example = () => {
  const [selected, setSelected] = useState(["papaya"]);

  return (
    <div>
      <h1>Add Fruits</h1>
      <pre>{JSON.stringify(selected)}</pre>
      <TagsInput
        value={selected}
        onChange={setSelected}
        name="fruits"
        placeHolder="enter fruits"
      />
      <em>press enter or comma to add new tag</em>
    </div>
  );
};

export default Example;
```

## 👀 Props

| Prop          | Description                            | Type                    | Default     |
| ------------- | -------------------------------------- | ----------------------- | ----------- |
| `name`        | value for name of input                | `string`                |             |
| `placeholder` | placeholder for text input             | `string`                |             |
| `value`       | initial tags                           | `string[]`              | `[]`        |
| `onChange`    | onChange callback (added/removed)      | `string[]`              |             |
| `onBlur`      | input `onBlur` callback                | `event`                 |             |
| `seprators`   | when to add tag (i.e. `Space`,`Enter`) | `string[]`              | `["Enter"]` |
| `onExisting`  | if tag is already added then callback  | `(tag: string) => void` |             |
| `onRemoved`   | on tag removed callback                | `(tag: string) => void` |             |

## 💅 Themeing

You can override CSS variables to customize the appearance

```css
.rti--container {
  --rti-bg: "#fff",
  --rti-border: "#ccc",
  --rti-main: "#3182ce",
  --rti-radius: "0.375rem",
  --rti-s: "0.5rem", /* spacing */
  --rti-tag: "#edf2f7",
  --rti-tag-remove: "#e53e3e",
}
```

> use `!important` if CSS variables are not getting applied

## 🤠 Credits

- [TypeScript](https://github.com/microsoft/typescript)
- [TSDX](https://github.com/jaredpalmer/tsdx)
- [Goober](https://github.com/cristianbote/goober)

## 📜 License

MIT &copy; [harshzalavadiya](https://github.com/harshzalavadiya)
