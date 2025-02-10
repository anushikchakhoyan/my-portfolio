import { LG_BREAKPOINT } from "@lib/constants";
import { useEffect, useState } from "react";

const getIsMobile = () => window.innerWidth <= LG_BREAKPOINT;

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(getIsMobile());

  useEffect(() => {
    const onResize = () => {
      setIsMobile(getIsMobile());
    }

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    }
  }, []);

  return isMobile;
}
