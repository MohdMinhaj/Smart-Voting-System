import React from 'react';
import styles from './CandidateCard.module.css';

const CandidateCard = ({ candidate, showAge = true }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {candidate.photo ? (
          <img src={candidate.photo} alt={candidate.name} className={styles.photo} />
        ) : (
          <div style={{fontSize: '40px'}}>👤</div>
        )}
      </div>
      <div className={styles.info}>
        <p className={styles.name}>{candidate.name}</p>
        {showAge && <p className={styles.age}>Age: {candidate.age}</p>}
      </div>
    </div>
  );
};

export default CandidateCard;