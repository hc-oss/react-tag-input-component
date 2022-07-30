import React, { useState } from "react";

import { TagsInput } from "../src";

export default {
  title: "Tags Input",
};

export const Page = () => {
  const [selected, setSelected] = useState(["papaya"]);
  const [disabled, setDisabled] = useState(false);
  const [keepWordsOnBackspace, setKeepWordsOnBackspace] = useState(false);

  return (
    <div style={{ marginBottom: "32px" }}>
      <h1>Add Fruits</h1>
      <pre>{JSON.stringify(selected)}</pre>
      <TagsInput
        value={selected}
        onChange={setSelected}
        name="fruits"
        placeHolder="enter fruits"
        disabled={disabled}
        keepWordsOnBackspace={keepWordsOnBackspace}
      />
      <div style={{ margin: "2rem 0", display: "flex", flexFlow: "row" }}>
        <button
          onClick={() => setDisabled(!disabled)}
          style={{ marginRight: "2rem" }}
        >
          Toggle Disable
        </button>
        <pre>Disable: {JSON.stringify(disabled)}</pre>
      </div>
      <div style={{ margin: "2rem 0", display: "flex", flexFlow: "row" }}>
        <button
          onClick={() => setKeepWordsOnBackspace(!keepWordsOnBackspace)}
          style={{ marginRight: "2rem" }}
        >
          Toggle Keep Words on Backspace
        </button>
        <pre>
          Keep Words on Backspace: {JSON.stringify(keepWordsOnBackspace)}
        </pre>
      </div>
    </div>
  );
};
