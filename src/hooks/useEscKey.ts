import { useEffect } from "react";

export const useEscKey = (guard: boolean, fn: any) => {
  useEffect(() => {
    const handler = (e: any) => {
      if (e.keyCode === 27) fn();
    };
    if (guard) document.body.addEventListener("keydown", handler);
    else document.body.removeEventListener("keydown", handler);
    return () => document.body.removeEventListener("keydown", handler);
  }, [guard]);
};
