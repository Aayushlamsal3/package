import React, { useState } from "react";

const UploadInsurance = ({ setImageName }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="upload-container">
      <label htmlFor="upload-insurance" className="upload-label">
        Upload Insurance Paper Photo
      </label>
      <div className="upload-insurance">
        <input
          type="file"
          id="upload-insurance"
          name="insurance_photo"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: "none", border: "1px solid #ffaa00" }}
        />
        <label htmlFor="upload-insurance" className="upload-button">
          {image ? (
            <img
              src={image}
              alt="insurance_photo"
              className="uploaded-image"
              style={{ border: "1px solid #ffaa00" }}
            />
          ) : (
            <span>Click to upload</span>
          )}
        </label>
      </div>
    </div>
  );
};

export default UploadInsurance;
