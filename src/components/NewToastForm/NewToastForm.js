import React from "react";

import Button from "../Button";
import { ToastContext } from "../ToastProvider";

import styles from "./NewToastForm.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

const INIT_FORM = {
  message: "",
  variant: VARIANT_OPTIONS[0],
};

function NewToastForm() {
  const initFocusRef = React.useRef();
  const [form, setForm] = React.useState(INIT_FORM);
  const { addToast } = React.useContext(ToastContext);
  const handleNewToast = (e) => {
    e.preventDefault();
    addToast({ ...form, id: new Date().getTime() });
    setForm(INIT_FORM);
    initFocusRef.current.focus();
  };

  React.useEffect(() => {
    initFocusRef.current.focus();
  }, [initFocusRef]);
  return (
    <form className={styles.controlsWrapper} onSubmit={handleNewToast}>
      <div className={styles.row}>
        <label
          htmlFor="message"
          className={styles.label}
          style={{ alignSelf: "baseline" }}
        >
          Message
        </label>
        <div className={styles.inputWrapper}>
          <textarea
            ref={initFocusRef}
            required
            id="message"
            className={styles.messageInput}
            value={form?.message}
            onChange={(e) => {
              setForm({ ...form, message: e.target.value });
            }}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.label}>Variant</div>
        <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
          {VARIANT_OPTIONS.map((option, i) => (
            <label key={option} htmlFor={`variant-${option}`}>
              <input
                required
                id={`variant-${option}`}
                type="radio"
                name="variant"
                value={option}
                checked={option === form.variant}
                onChange={(e) => {
                  setForm({ ...form, variant: e.target.value });
                }}
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.label} />
        <div className={`${styles.inputWrapper}`}>
          <Button>Pop Toast!</Button>
        </div>
      </div>
    </form>
  );
}

export default NewToastForm;
