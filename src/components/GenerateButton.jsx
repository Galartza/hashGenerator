import React from 'react';
import styles from '../styles/GenerateButton.module.css';
import { RiAiGenerate } from "react-icons/ri";

const GenerateButton = ({ onClick }) => {
  return (
    <button className={styles.generateButton} onClick={onClick}>
      Generar Hash <RiAiGenerate />
    </button>
  );
};

export default GenerateButton;
