import React from "react";
import cc from "./classnames";

interface TagProps {
  text: string;
  remove: any;
  disabled?: boolean;
  className?: string;
}

export default function Tag({ text, remove, disabled, className }: TagProps) {
  const handleOnRemove = e => {
    e.stopPropagation();
    remove(text);
  };

  return (
    <span className={cc("rti--tag", className)}>
      <span>{text}</span>
      {!disabled && (
        <button
          type="button"
          onClick={handleOnRemove}
          aria-label={`remove ${text}`}
        >
          &#10005;
        </button>
      )}
    </span>
  );
}
