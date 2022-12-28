import { useEffect, useRef } from "react";

export function useDidUpdateEffect(
  fn: () => void,
  inputs: ReadonlyArray<unknown>
) {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) fn();
    else didMountRef.current = true;
  }, inputs);
}
