import React from 'react';
import styles from '../styles/CopyButton.module.css';
import { IoNewspaperOutline } from "react-icons/io5";
import Swal from 'sweetalert2';


const CopyButton = ({ text }) => {
  const copyToClipboard = () => {
    if (navigator.clipboard && text) {
      navigator.clipboard.writeText(text)
        .then(() => {
          Swal.fire({
            title: "¡Copiado!",
            text: "El hash se copió en el portapapeles.",
            icon: "success",
          });
        })
        .catch(err => {
          alert('Error al copiar al portapapeles: ', err);
        });
    }
  };

  return (
    <button className={styles.copyButton} onClick={copyToClipboard}>
      Copiar <IoNewspaperOutline />
    </button>
  );
};

export default CopyButton;
