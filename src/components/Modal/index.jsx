"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styles from "./modal.module.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 900,
  minWidth: 450,
  p: 4,
};

export default function BasicModal({ src, alt, text }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='button'>
      <button className={styles.btn} onClick={handleOpen}>
        {text}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <img className={styles.img} src={src} alt={alt} />
        </Box>
      </Modal>
    </div>
  );
}
