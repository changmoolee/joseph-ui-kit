import React, { useEffect } from "react";

export const useKeyEscPress = (closeModal: any) => {
  useEffect(() => {
    const EscPressEvent = (event: any) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", EscPressEvent);
    return () => window.removeEventListener("keydown", EscPressEvent);
  }, []);

  return <div>useKeyEscPress</div>;
};
