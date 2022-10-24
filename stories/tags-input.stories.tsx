import React, { useState } from "react";

import { TagsInput } from "../src";

export default {
  title: "Tags Input",
};

export const Page = () => {
  const [selected, setSelected] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [isEditOnRemove, setisEditOnRemove] = useState(false);

  const [multipleValues,setMultipleValues] = useState(false)
  const [numberOfValues,setNumberOfValues] = useState(0)

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
        multiValueTags={multipleValues}
        numberOfValuesPerTag={numberOfValues}
        beforeAddValidate={beforeAddValidate}
      />
      <div style={{ marginTop: "2rem" }}>
        <button
          onClick={() => setDisabled(!disabled)}
          style={{ marginRight: "2rem" }}
        >
          Toggle Disable
        </button>
        <pre>Disable: {JSON.stringify(disabled)}</pre>
      </div>
      <div>
        <button
          onClick={() => setisEditOnRemove(!isEditOnRemove)}
          style={{ marginRight: "2rem" }}
        >
          Toggle Keep Words on Backspace
        </button>
        <pre>Keep Words on Backspace: {JSON.stringify(isEditOnRemove)}</pre>
      </div>


      <div>
        <button
          onClick={() => setMultipleValues(!multipleValues)}
          style={{ marginRight: "2rem" }}
        >
          Toggle Multiple Values per Tag
        </button>
        <pre>Multiple values per tag: {JSON.stringify(multipleValues)}</pre>
      </div>

      <div>

          <input placeholder={"Enter number of values"} style={{ marginRight: "2rem" }} type={"number"} onChange={(e) => setNumberOfValues(Number(e.target.value))}/>

        <pre>Number of values per tag: {JSON.stringify(numberOfValues)}</pre>
      </div>

      <div>
        <button onClick={() => setSelected(["tangerine"])}>
          override value
        </button>
      </div>
    </div>
  );
};
