import React, { useState } from 'react';
import styles from './CandidateForm.module.css';
import { calculateAge } from '../utils/calculateAge';
import CandidateCard from './CandidateCard';

const CandidateForm = ({ candidates, setCandidates, onStartVoting }) => {
  const [form, setForm] = useState({
    name: '',
    dob: '',
    mobile: '',
    address: '',
    photo: null
  });

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, photo: URL.createObjectURL(file) });
    }
  };

  const addCandidate = () => {
    const age = calculateAge(form.dob);
    const newCandidate = { 
      ...form, 
      age: age, 
      votes: 0, 
      id: Date.now() 
    };
    setCandidates([...candidates, newCandidate]);
  
    setForm({ name: '', dob: '', mobile: '', address: '', photo: null });
  };

  const handleFinalStart = () => {
    if (window.confirm("Are you sure? Voting will start now.")) {
      onStartVoting();
    }
  };

  
  const isFormValid = form.name && form.dob && form.photo;

  return (
    <div className={styles.container}>
      <h1 className={styles.head1} style={{marginBottom: '6%'}}>CANDIATE REGISTRATION</h1>
      
      <div className={styles.card}>
        <div className={styles.formGrid}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Full Name</label>
            <input className={styles.input} type="text" placeholder="Enter name" 
              value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Date of Birth</label>
            <input className={styles.input} type="date" 
              value={form.dob} onChange={e => setForm({...form, dob: e.target.value})} />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Mobile </label>
            <input className={styles.input} type="tel" placeholder="Mobile number" 
              value={form.mobile} onChange={e => setForm({...form, mobile: e.target.value})} />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Address</label>
            <input className={styles.input} type="text" placeholder="Address" 
              value={form.address} onChange={e => setForm({...form, address: e.target.value})} />
          </div>

          <label className={styles.uploadBox}>
            <input type="file" hidden onChange={handleFile} accept="image/*" />
            {form.photo ? "✅ Photo Ready" : "📸 Upload Photo"}
          </label>

          <button className={styles.addBtn} onClick={addCandidate} disabled={!isFormValid}>
            Add Candidate
          </button>
        </div>
      </div>

      <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '40px', justifyContent: 'center'}}>
        {candidates.map(c => (
          <CandidateCard key={c.id} candidate={c} />
        ))}
      </div>

      {candidates.length >= 2 && (
        <button className={styles.startVotingBtn} onClick={handleFinalStart}>
          Go to Voting Page 🗳️
        </button>
      )}
    </div>
  );
};

export default CandidateForm;