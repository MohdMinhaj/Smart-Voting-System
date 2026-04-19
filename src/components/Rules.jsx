import React from 'react';
import styles from './Rules.module.css';

const Rules = ({ onStart }) => {
  const rules = [
    "Voters must physically present themselves.",
    "Minimum of two candidates required.",
    "Only one vote per session.",
    "3-second system lock after each vote.",
    "Wait for the 'Beep' sound to confirm.",
    "Results visible only at the end.",
    "Do not refresh the browser."
  ];

  return (
    
    <div className={styles.container}>

      <div className={styles.head1}>Smart Voting System</div>

      <div className={styles.card}>
      <h1 className={styles.title}>Rules</h1>
        <ul className={styles.rulesList}>
          {rules.map((rule, index) => (
            <ol key={index} className={styles.ruleItem}>
              <span className={styles.icon}>•</span>
              <span className={styles.ruleText}>{rule}</span>
            </ol>
          ))}
        </ul>
        <button className={styles.startButton} onClick={onStart}>
          Start Voting
        </button>
      </div>
    </div>
  );
};

export default Rules;