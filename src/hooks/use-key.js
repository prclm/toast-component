import React from "react";

const useKey = (key, callback) => {
  React.useEffect(() => {
    const keyEvent = (e) => {
      if (key === e.code) {
        callback();
      }
    };
    document.addEventListener("keydown", keyEvent);
    return () => {
      document.removeEventListener("keydown", keyEvent);
    };
  }, [key, callback]);
};

export const useEscapeKey = (callback) => {
  useKey("Escape", callback);
};

export default useKey;
