{/* ./src/componenets/challengecard.jsx */}
import React from 'react';

const ChallengeCard = ({ title, description, requirements, deliverables }) => {
  return (
    <div className="bg-opacity-95 bg-[#0D0D18] rounded-2xl p-8 mb-6 backdrop-blur border border-white/10">
      <h2 className="text-2xl font-semibold text-white mb-4">{title}</h2>
      
      {description && (
        <p className="text-white/70 mb-6 leading-relaxed">
          {description}
        </p>
      )}

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-white mb-3">Requirements:</h3>
          <div className="space-y-4">
            {requirements.map((req, index) => (
              <div key={index}>
                {req.title && (
                  <h4 className="text-white font-medium mb-2">{req.title}</h4>
                )}
                <p className="text-white/70 leading-relaxed">
                  {req.description || req}
                </p>
              </div>
            ))}
          </div>
        </div>

        {deliverables && deliverables.length > 0 && (
          <div>
            <h3 className="text-lg font-medium text-white mb-3">Deliverables:</h3>
            <ul className="space-y-2">
              {deliverables.map((del, index) => (
                <li key={index} className="text-white/70 pl-4 relative">
                  <span className="absolute left-0 top-0">•</span>
                  {del}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChallengeCard;