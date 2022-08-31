import React, { useEffect } from "react";

type useKeyEscPressProps = () => void;

export const useKeyEscPress = (closeModal: useKeyEscPressProps) => {
  useEffect(() => {
    const EscPressEvent = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", EscPressEvent);
    return () => window.removeEventListener("keydown", EscPressEvent);
  }, []);

  return <div>useKeyEscPress</div>;
};
