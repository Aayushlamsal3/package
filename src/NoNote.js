import React, { useState } from "react";
import Terms from "./Terms";
import "./App.css"; // Make sure to import the CSS file

const NoNote = () => {
  const [showTerms, setShowTerms] = useState(false);

  const handleTermsClick = () => {
    setShowTerms((prevShowTerms) => !prevShowTerms);
  };

  const closeModal = () => {
    setShowTerms(false);
  };

  return (
    <div className="second">
      <h2 className="Title">Bluebook Service with Pick & Drop</h2>
      <h3 className="terms" onClick={handleTermsClick}>
        Terms and Condition
      </h3>
      {showTerms && (
        <div className="modal-overlay">
          <div className="modal-content">
            <Terms />
            <div className="term-close">
              <button className="close-button" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoNote;
