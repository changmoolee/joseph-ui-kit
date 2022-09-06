import React, { useState } from "react";
import Modal from "./Modal";

const ModalExample = ({ ...args }) => {
  const [open, setOpen] = useState<boolean>(true);

  const closeModal = () => {
    setOpen(false);
  };

  return open ? (
    <Modal
      open={open}
      closeModal={closeModal}
      secondaryButtonOnClick={closeModal}
      {...args}
    />
  ) : null;
};

export default ModalExample;
