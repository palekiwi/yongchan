import { useEffect, useState } from "react";

export const useScrollbarWidth = () => {
  const [width, set] = useState(0);

  useEffect(() => {
    if (document && document.documentElement)
      set(window.innerWidth - document.documentElement.clientWidth);
  }, []);

  return width;
};
