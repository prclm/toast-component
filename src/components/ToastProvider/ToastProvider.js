import React from "react";
import { useEscapeKey } from "../../hooks/use-key";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const addToast = React.useCallback((toast) => {
    setToasts((toasts) => [...toasts, toast]);
  }, []);

  const removeToast = React.useCallback((id) => {
    setToasts((toasts) => {
      return [...toasts].filter((t) => t.id !== id);
    });
  }, []);

  useEscapeKey(() => {
    setToasts((toasts) => {
      const nextToasts = [...toasts];
      nextToasts.shift();
      return nextToasts;
    });
  });

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
