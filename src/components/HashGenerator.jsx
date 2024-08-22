import React, { useState } from 'react';
import styles from '../styles/HashGenerator.module.css';
import GenerateButton from './GenerateButton';
import CopyButton from './CopyButton';


const HashGenerator = () => {
  const [hash, setHash] = useState('');
  const [useCustomLength, setUseCustomLength] = useState(false);

  const generateHash = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const hashLength = useCustomLength ? customLength : Math.floor(Math.random() * 11) + 10; // Random length between 10 and 20
    for (let i = 0; i < hashLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    setHash(result);
  };
  return (
    <div className={styles.containerPrincipal}>
        <h1 className={styles.title}>Generador de Hash Aleatorio</h1>
        <div className={styles.containerSecundario}>
          {useCustomLength && (
            <div className={styles.numberInputContainer}>
              <label className={styles.numberInputLabel}>
                <input
                  type="number"
                  value={customLength}
                  onChange={handleLengthChange}
                  min="10"
                  max="20"
                  className={styles.numberInput}
                />
              </label>
            </div>
          )}
          <GenerateButton onClick={generateHash} />
          {hash && (
            <div>
              <CopyButton text={hash} />
              <p className={styles.hashOutput}>{hash}</p>
            </div>
          )}
        </div>
      </div>
  );
};

export default HashGenerator;
