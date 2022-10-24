import React from "react";
import cc from "./classnames";

interface TagProps {
  text: string | string[];
  remove: any;
  openTag?:boolean;
  disabled?: boolean;
  className?: string;
  classNameInput?:string;
  handleKeyUp?:(e) => void;
}

export default function Tag({ text, remove, disabled, className,openTag,handleKeyUp,classNameInput }: TagProps) {
  const handleOnRemove = e => {
    e.stopPropagation();
    remove(text);
  };

  return (
    <span className={cc("rti--tag", className)}>

      {!Array.isArray(text) && <span>{text}</span>}

      {Array.isArray(text) && text.map((item, index:number) => {
        return <span key={index}>{item}{index < text.length - 1 && '->'}</span>
      })}

      {openTag && (
          <input className={cc("rti--input--tag",classNameInput)} onKeyUp={handleKeyUp} autoFocus={true}/>
        )}

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
