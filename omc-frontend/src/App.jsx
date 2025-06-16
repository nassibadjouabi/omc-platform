import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar';

function App() {
 const [timer, setTimer] = useState({ days: 0, hours: 0, minutes: 0 });
 const [challengeData, setChallengeData] = useState([]);
 const [isLoading, setIsLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(() => {
   setIsLoading(true);
   fetch('http://localhost:5001/api/challenges')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {
       console.log('API Response:', data);
       setChallengeData(data.challenges || []);
       console.log('Challenge Data:', challengeData);
       setTimer(data.timer || { days: 0, hours: 0, minutes: 0 });
       setIsLoading(false);
     })
     .catch((error) => {
       console.error('Error fetching data:', error);
       setError(error.message);
       setIsLoading(false);
     });
 }, []);

 if (isLoading) {
   return <div>Loading...</div>;
 }

 if (error) {
   return <div>Error: {error}</div>;
 }

 return (
   <div className="container">
     {console.log('Rendering with challengeData:', challengeData)}
     <Navbar />
     <div className="challenge-content">
       <div className="page-header">
         <div className="title-section">
           <h1 className="page-title">Challenge Listings</h1>
           <p className="page-subtitle">
             We've got a new challenge for you! ✨ Choose your path and showcase your skills in Graphic Design, UX/UI.
           </p>
         </div>

         <div className="timer-display">
           <i className="fa-regular fa-clock"></i>
           <span>{timer.days} Day</span>
           <span>:</span>
           <span>{timer.hours} Hour</span>
           <span>:</span>
           <span>{timer.minutes} Min</span>
         </div>
       </div>

       {challengeData && challengeData.length > 0 ? (
         challengeData.map((challenge, index) => (
           <div key={index} className="challenge-card">
             <h1 className="challenge-title">{challenge.title}</h1>
             <p className="challenge-description">{challenge.description}</p>
             
             <h2 className="section-title">Requirements:</h2>
             {challenge.requirements && challenge.requirements.map((requirement, idx) => (
               <div key={idx} className="requirement-item">
                 <h3 className="requirement-title">{requirement.title}</h3>
                 <p className="requirement-description">{requirement.description}</p>
               </div>
             ))}

             {challenge.deliverables && (
               <>
                 <h4 className="section-title">Deliverables:</h4>
                 <ul className="deliverables-list">
                   {challenge.deliverables.map((deliverable, idx) => (
                     <li key={idx}>{deliverable}</li>
                   ))}
                 </ul>
               </>
             )}
           </div>
         ))
       ) : (
         <p>No challenges available</p>
       )}

       <button className="submit-button" onClick={() => alert('Your work has been submitted!')}>
         Submit Your Work
         <i className="fa-regular fa-circle-check"></i>
       </button>
     </div>
   </div>
 );
}

export default App;