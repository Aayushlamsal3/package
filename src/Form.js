import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import UploadInsurance from "./UploadInsurance";
import Citizenship1 from "./Citizenship1";
import Citizenship2 from "./Citizenship2";
import NoNote from "./NoNote";

const Form = ({ company }) => {
  const location = useLocation();
  const history = useHistory();

  if (!location.state?.hl_service_log) {
    window.location.replace("/");
  }

  const [imageName, setImageName] = useState({
    insurance_photo: "insurance_photo.jpg",
    citizenship_front: "citizenship_front.jpg",
    citizenship_back: "citizenship_back.jpg",
  });

  const {
    total_amount,
    hl_service_log,
    insurance_photo,
    citizenship_front,
    citizenship_back,
    ins,
  } = location.state;

  const [post, setPost] = useState({
    fullname: "",
    contactnumber: "",
    email: "",
    address: "",
    city: "",
    vehicle_number: "",
    hl_service_log: hl_service_log,
    product_code: "nLFrfbH2RGAoULAiqsoSST",
    insurance_photo,
    citizenship_front,
    citizenship_back,
  });

  const handleInput = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push({
      pathname: "/final",
      state: {
        user_data: post,
        total_amount: total_amount,
        insurance_photo: !ins.insurance ? imageName.insurance_photo : "",
        citizenship_front: imageName.citizenship_front,
        citizenship_back: imageName.citizenship_back,
      },
    });
  };

  return (
    <div>
      <NoNote />
      <div className="formpage-box">
        <div className="total-form">
          <h4>Total Amount</h4>
          <p>Rs. {total_amount}</p>
        </div>
        <form action="" className="second-form" onSubmit={handleSubmit}>
          <div className="form-sidebyside">
            <div className="single-label-inp">
              <label htmlFor="fullname">
                Full Name <span>*</span>
              </label>
              <input
                onChange={handleInput}
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Full Name"
                className="sec"
                required
              />
            </div>
            <div className="single-label-inp">
              <label htmlFor="contactnumber">
                Contact Number <span>*</span>
              </label>
              <div>
                <input
                  onChange={handleInput}
                  type="tel"
                  name="contactnumber"
                  id="contactnumber"
                  placeholder="Contact Number"
                  className="sec"
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-sidebyside">
            <div className="single-label-inp">
              <label htmlFor="email">
                Email <span>*</span>
              </label>
              <input
                onChange={handleInput}
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="sec"
                required
              />
            </div>
            <div className="single-label-inp">
              <label htmlFor="address">
                Pick Location <span>*</span>
              </label>
              <input
                onChange={handleInput}
                type="text"
                name="address"
                id="address"
                placeholder="Pick Location"
                className="sec"
                required
              />
            </div>
          </div>
          <div className="form-sidebyside">
            <div className="single-label-inp">
              <label htmlFor="city">
                City <span>*</span>
              </label>
              <input
                onChange={handleInput}
                type="text"
                name="city"
                id="city"
                placeholder="City"
                className="sec"
                required
              />
            </div>
            <div className="single-label-inp">
              <label htmlFor="vehicle_number">
                Vehicle Number <span>*</span>
              </label>
              <input
                onChange={handleInput}
                type="text"
                name="vehicle_number"
                id="vehicle_number"
                placeholder="Vehicle Number"
                className="sec"
                required
              />
            </div>
          </div>
          {!ins ? (
            <UploadInsurance />
          ) : (
            <>
              <div className="form-sidebyside">
                <Citizenship1 />
                <Citizenship2 />
              </div>
            </>
          )}

          <div className="form-btn-next">
            <button type="submit" className="form-btn">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
