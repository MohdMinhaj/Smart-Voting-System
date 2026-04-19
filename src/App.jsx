import React, { useState, useEffect } from 'react';
import Rules from './components/Rules';
import CandidateForm from './components/CandidateForm';
import VotingPage from './components/Votingpage';
import Result from './components/Result';

function App() {
  const [step, setStep] = useState(0); 
  const [candidates, setCandidates] = useState([]);


  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = "Are you sure? Your voting data will be lost.";
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);


  const goToForm = () => setStep(1);
  const goToVoting = () => setStep(2);

  return (
    <div className="App">
     
      {step === 0 && <Rules onStart={goToForm} />}

   
      {step === 1 && (
        <CandidateForm 
          candidates={candidates} 
          setCandidates={setCandidates} 
          onStartVoting={goToVoting} 
        />
      )}

      {step === 2 && (
  <VotingPage 
    candidates={candidates} 
    setCandidates={setCandidates} 
    onFinish={() => setStep(3)} 
  />
)}


{step === 3 && <Result candidates={candidates} />}
    </div>
  );
}

export default App;