import { useState } from 'react';
import './App.css';

function App() {
  const [patientName, setPatientName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!patientName.trim() || !email.trim()) {
      return;
    }

    console.log({ patientName, email });
    setPatientName('');
    setEmail('');
  };

  return (
    <main className="app-container">
      <h1>Patient Form</h1>

      <form className="patient-form" onSubmit={handleSubmit}>
        <label htmlFor="patientName">Patient Name</label>
        <input
          id="patientName"
          type="text"
          value={patientName}
          onChange={(event) => setPatientName(event.target.value)}
          placeholder="Enter patient name"
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter email"
        />

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default App;
