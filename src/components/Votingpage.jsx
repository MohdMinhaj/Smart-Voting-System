import React, { useState } from 'react';
import styles from './VotingPage.module.css';
import CandidateCard from './CandidateCard';

const VotingPage = ({ candidates, setCandidates, onFinish }) => {
  const [isLocked, setIsLocked] = useState(false);

  const playBeep = () => {
    const context = new (window.AudioContext || window.webkitAudioContext)();
    const osc = context.createOscillator();
    const gain = context.createGain();
    osc.connect(gain);
    gain.connect(context.destination);
    osc.frequency.value = 800;
    gain.gain.value = 0.1;
    osc.start();
    osc.stop(context.currentTime + 0.5);
  };

  const handleVote = (id) => {
    playBeep();
    setIsLocked(true);

    const updated = candidates.map(c => 
      c.id === id ? { ...c, votes: (c.votes || 0) + 1 } : c
    );
    setCandidates(updated);

    setTimeout(() => {
      setIsLocked(false);
    }, 3000);
  };

  return (
    <div className={styles.container}>
      <h1 style={{fontFamily: 'Times New Roman', fontSize: '3.5rem', fontWeight: '900', color: '#5d5746', marginBottom: '20px'}}>
        CAST YOUR VOTE
      </h1>

      {isLocked && (
        <div className={styles.overlay}>
          <h2 className={styles.lockText}>Vote Casted</h2>
        </div>
      )}

      <div className={styles.grid}>
        {candidates.map(candidate => (
          <div key={candidate.id} className={styles.candidateWrapper}>
            <CandidateCard candidate={candidate} showAge={false} />
            <button 
              className={styles.voteBtn}
              onClick={() => handleVote(candidate.id)}
              disabled={isLocked}
            >
              VOTE
            </button>
          </div>
        ))}
      </div>


      <button 
        className={styles.finishBtn} 
        onClick={onFinish}
        disabled={isLocked}
      >
        FINISH & SHOW RESULT
      </button>
    </div>
  );
};

export default VotingPage;