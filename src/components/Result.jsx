import React from 'react';
import styles from './VotingPage.module.css'; 
import CandidateCard from './CandidateCard';

const Result = ({ candidates }) => {
 
  const winner = [...candidates].sort((a, b) => b.votes - a.votes)[0];

  return (
    <div className={styles.container}>
      <h1 style={{fontFamily: 'Times New Roman', fontSize: '3.5rem', fontWeight: '900', color: '#5d5746'}}>
        ELECTION RESULTS
      </h1>

      <div style={{
        marginTop: '30px', 
        padding: '30px', 
        borderRadius: '30px', 
        background: '#E8DBB3', 
        boxShadow: '15px 15px 30px #c5ba98, -15px -15px 30px #ffffce',
        textAlign: 'center',
        border: '3px solid #34c759'
      }}>
        <h2 style={{color: '#34c759', fontSize: '2rem'}}>🏆 WINNER 🏆</h2>
        <h1 style={{fontSize: '3rem', margin: '10px 0'}}>{winner.name}</h1>
        <p style={{fontSize: '1.5rem', fontWeight: '700'}}>Total Votes: {winner.votes}</p>
      </div>

      <div className={styles.grid}>
        {candidates.map(candidate => (
          <div key={candidate.id} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px'}}>
            <CandidateCard candidate={candidate} showAge={true} />
            <div style={{
              padding: '10px 30px', 
              background: '#E8DBB3', 
              borderRadius: '15px', 
              fontWeight: '900',
              boxShadow: 'inset 4px 4px 8px #c5ba98, inset -4px -4px 8px #ffffce'
            }}>
              Votes: {candidate.votes || 0}
            </div>
          </div>
        ))}
      </div>

      <button 
        onClick={() => window.location.reload()} 
        style={{
          marginTop: '50px', 
          padding: '15px 40px', 
          borderRadius: '50px', 
          border: 'none', 
          background: '#1d1d1f', 
          color: 'white', 
          fontWeight: '700', 
          cursor: 'pointer'
        }}
      >
        NEW ELECTION
      </button>
    </div>
  );
};

export default Result;