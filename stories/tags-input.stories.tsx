import React, { useState } from "react";

import { TagsInput } from "../src";

export default {
  title: "Tags Input",
};

export const Default = () => {
  const [selected, setSelected] = useState(["papaya"]);
  const [disabled, setDisabled] = useState(false);

  return (
    <div>
      <h1>Add Fruits</h1>
      <pre>{JSON.stringify(selected)}</pre>
      <TagsInput
        value={selected}
        onChange={setSelected}
        name="fruits"
        placeHolder="enter fruits"
        disabled={disabled}
      />
      <div style={{ margin: "2rem 0", display: "flex", flexFlow: "row" }}>
        <button
          onClick={() => setDisabled(!disabled)}
          style={{ marginRight: "2rem" }}
        >
          Change to Disable
        </button>
        <pre>Disable: {JSON.stringify(disabled)}</pre>
      </div>
    </div>
  );
};
