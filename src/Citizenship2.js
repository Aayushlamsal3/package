import React, { useState } from "react";

const Citizenship2 = ({ setImageName }) => {
  const [image, setImage] = useState(null);
  const [imageNameState, setImageNameState] = useState({});

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
      setImageNameState({ ...imageNameState, citizenship_back: file.name });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="upload-container">
      <label htmlFor="upload-citizenship-back" className="upload-label">
        Citizenship Back
      </label>
      <div className="upload-insurance">
        <input
          type="file"
          id="upload-citizenship-back"
          name="citizenship_back"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: "none", border: "1px solid #ffaa00" }}
        />
        <label htmlFor="upload-citizenship-back" className="upload-button">
          {image ? (
            <img
              src={image}
              alt="citizenship_back"
              className="uploaded-image"
            />
          ) : (
            <span>Click to upload</span>
          )}
        </label>
      </div>
    </div>
  );
};

export default Citizenship2;
