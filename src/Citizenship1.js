import React, { useState } from "react";

const Citizenship1 = ({ setImageName }) => {
  const [image, setImage] = useState(null);
  const [imageNameState, setImageNameState] = useState({});

  const handleImageChange = (event) => {
    // event.target.name = event.target.files[0]
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
      setImageNameState({ ...imageNameState, citizenship_front: file.name });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="upload-container">
      <label htmlFor="upload-citizenship-front" className="upload-label">
        Citizenship Front
      </label>
      <div className="upload-insurance">
        <input
          type="file"
          id="upload-citizenship-front"
          name="citizenship_front"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: "none", border: "1px solid #ffaa00" }}
        />
        <label htmlFor="upload-citizenship-front" className="upload-button">
          {image ? (
            <img
              src={image}
              alt="citizenship_front"
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

export default Citizenship1;
