import React from "react";

const useKeyDown = (key, callback) => {
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (key === event.code) {
        callback(event);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [key, callback]);
};

export const useEscapeKey = (callback) => {
  useKeyDown("Escape", callback);
};

export default useKeyDown;
