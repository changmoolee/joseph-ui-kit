import React, { useEffect } from "react";

interface useKeyEscPressProps {
  (): void;
}

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
