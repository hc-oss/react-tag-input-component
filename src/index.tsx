import { css, setup } from "goober";
import React, { useEffect, useState } from "react";

import cc from "./classnames";
import Tag from "./tag";

export interface TagsInputProps {
  name?: string;
  placeHolder?: string;
  value?: string[];
  onChange?: (tags: string[]) => void;
  onBlur?: any;
  seprators?: string[];
  onExisting?: (tag: string) => void;
  onRemoved?: (tag: string) => void;
  disabled?: boolean;
  isEditOnRemove?: boolean;
  beforeAddValidate?: (tag: string, existingTags: string[]) => boolean;
}

// initialize goober once
setup(React.createElement);

const RTIContainer = css({
  "--rti-bg": "#fff",
  "--rti-border": "#ccc",
  "--rti-main": "#3182ce",
  "--rti-radius": "0.375rem",
  "--rti-s": "0.5rem",
  "--rti-tag": "#edf2f7",
  "--rti-tag-remove": "#e53e3e",
  "--rti-tag-padding": "0.15rem 0.25rem",

  "*": {
    boxSizing: "border-box",
    transition: "all 0.2s ease",
  },

  alignItems: "center",
  bg: "var(--rti-bg)",
  border: "1px solid var(--rti-border)",
  borderRadius: "var(--rti-radius)",
  display: "flex",
  flexWrap: "wrap",
  gap: "var(--rti-s)",
  lineHeight: 1.4,
  padding: "var(--rti-s)",

  "&:focus-within": {
    borderColor: "var(--rti-main)",
    boxShadow: "var(--rti-main) 0px 0px 0px 1px",
  },
});

const RTIInput = css({
  border: 0,
  outline: 0,
  fontSize: "inherit",
  lineHeight: "inherit",
  width: "50%",
});

const defaultSeprators = ["Enter"];

export const TagsInput = ({
  name,
  placeHolder,
  value,
  onChange,
  onBlur,
  seprators,
  onExisting,
  onRemoved,
  disabled,
  isEditOnRemove,
  beforeAddValidate,
}: TagsInputProps) => {
  const [tags, setTags] = useState<any>(value || []);

  useEffect(() => {
    onChange && onChange(tags);
  }, [tags]);

  const handleOnKeyUp = e => {
    e.stopPropagation();

    const text = e.target.value;

    if (e.key === "Backspace" && tags.length && !text) {
      e.target.value = isEditOnRemove ? `${tags.at(-1)} ` : "";
      setTags([...tags.slice(0, -1)]);
    }

    if (text && (seprators || defaultSeprators).includes(e.key)) {
      if (beforeAddValidate && !beforeAddValidate(text, tags)) return;

      if (tags.includes(text)) {
        onExisting && onExisting(text);
        return;
      }
      setTags([...tags, text]);
      e.target.value = "";
      e.preventDefault();
    }
  };

  const onTagRemove = text => {
    setTags(tags.filter(tag => tag !== text));
    onRemoved && onRemoved(text);
  };

  return (
    <div aria-labelledby={name} className={cc("rti--container", RTIContainer)}>
      {tags.map(tag => (
        <Tag key={tag} text={tag} remove={onTagRemove} disabled={disabled} />
      ))}

      <input
        className={cc("rti--input", RTIInput)}
        type="text"
        name={name}
        placeholder={placeHolder}
        onKeyDown={handleOnKeyUp}
        onBlur={onBlur}
        disabled={disabled}
      />
    </div>
  );
};
