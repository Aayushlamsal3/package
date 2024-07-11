import React, { useState } from 'react';
import Terms from './Terms';
import './App.css'; // Make sure to import the CSS file

const Second = () => {
  const [showTerms, setShowTerms] = useState(false);

  const handleTermsClick = () => {
    setShowTerms(prevShowTerms => !prevShowTerms);
  };

  const closeModal = () => {
    setShowTerms(false);
  };

  return (
    <div className="second">
      <h3 className="Title">Bluebook Service with Pick & Drop</h3>
      <h3 className="terms" onClick={handleTermsClick}>
        Terms and Condition
      </h3>
      {showTerms && (
        <div className="modal-overlay">
          <div className="modal-content">
            <Terms />
            <div className="term-close">
            <button className="close-button" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
      <p className="note">
        Note: Customer Support: 01-5970053 WhatsApp/Viber (Chat only): 9801890083. This Service is only for Kathmandu Valley
      </p>
    </div>
  );
};

export default Second;
