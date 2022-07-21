import { useEffect, useRef, useDebugValue } from "react";

export const usePrevious = (value) => {
  const ref = useRef;

  useDebugValue("--- CUSTOM HOOK E HSUAHSUHUAH");
  useDebugValue("Número anterior: " + value);

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};
