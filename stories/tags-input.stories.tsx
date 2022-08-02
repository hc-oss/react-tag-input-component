import React, { useState } from "react";

import { TagsInput } from "../src";

export default {
  title: "Tags Input",
};

export const Page = () => {
  const [selected, setSelected] = useState(["papaya"]);
  const [disabled, setDisabled] = useState(false);
  const [isEditOnRemove, setisEditOnRemove] = useState(false);

  const beforeAddValidate = text => {
    if (text.length < 3) {
      alert("too short!");
      return false;
    }
    return true;
  };

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
        isEditOnRemove={isEditOnRemove}
        beforeAddValidate={beforeAddValidate}
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
          onClick={() => setisEditOnRemove(!isEditOnRemove)}
          style={{ marginRight: "2rem" }}
        >
          Toggle Keep Words on Backspace
        </button>
        <pre>Keep Words on Backspace: {JSON.stringify(isEditOnRemove)}</pre>
      </div>
    </div>
  );
};
