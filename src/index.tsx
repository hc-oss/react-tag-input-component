import "./styles.css";

import React, { useState } from "react";
import { useDidUpdateEffect } from "./use-did-update-effect";

import cc from "./classnames";
import Tag from "./tag";

export interface TagsInputProps {
  name?: string;
  placeHolder?: string;
  value?: string[];
  onChange?: (tags: string[]) => void;
  onBlur?: any;
  separators?: string[];
  disableBackspaceRemove?: boolean;
  onExisting?: (tag: string) => void;
  onRemoved?: (tag: string) => void;
  disabled?: boolean;
  isEditOnRemove?: boolean;
  beforeAddValidate?: (tag: string, existingTags: string[]) => boolean;
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  classNames?: {
    input?: string;
    tag?: string;
  };
}

const defaultSeparators = ["Enter"];

export const TagsInput = ({
  name,
  placeHolder,
  value,
  onChange,
  onBlur,
  separators,
  disableBackspaceRemove,
  onExisting,
  onRemoved,
  disabled,
  isEditOnRemove,
  beforeAddValidate,
  onKeyUp,
  classNames,
}: TagsInputProps) => {
  const [tags, setTags] = useState<any>(value || []);

  useDidUpdateEffect(() => {
    onChange && onChange(tags);
  }, [tags]);

  useDidUpdateEffect(() => {
    if (JSON.stringify(value) !== JSON.stringify(tags)) {
      setTags(value);
    }
  }, [value]);

  const handleOnKeyUp = e => {
    e.stopPropagation();

    const text = e.target.value;

    if (
      !text &&
      !disableBackspaceRemove &&
      tags.length &&
      e.key === "Backspace"
    ) {
      e.target.value = isEditOnRemove ? `${tags.at(-1)} ` : "";
      setTags([...tags.slice(0, -1)]);
    }

    if (text && (separators || defaultSeparators).includes(e.key)) {
      e.preventDefault();
      if (e.nativeEvent.isComposing || e.nativeEvent.keyCode === 229) return;

      if (beforeAddValidate && !beforeAddValidate(text, tags)) return;

      if (tags.includes(text)) {
        onExisting && onExisting(text);
        return;
      }
      setTags([...tags, text]);
      e.target.value = "";
    }
  };

  const onTagRemove = text => {
    setTags(tags.filter(tag => tag !== text));
    onRemoved && onRemoved(text);
  };

  return (
    <div aria-labelledby={name} className="rti--container">
      {tags.map(tag => (
        <Tag
          key={tag}
          className={classNames?.tag}
          text={tag}
          remove={onTagRemove}
          disabled={disabled}
        />
      ))}

      <input
        className={cc("rti--input", classNames?.input)}
        type="text"
        name={name}
        placeholder={placeHolder}
        onKeyDown={handleOnKeyUp}
        onBlur={onBlur}
        disabled={disabled}
        onKeyUp={onKeyUp}
      />
    </div>
  );
};
