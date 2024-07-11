import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./index.css";

const BluebookService = ({ company }) => {
  const [post, setPost] = useState({
    vehicle_type: "2w",
    manufacture_year: "",
    engine_capacity: 0,
    last_renewal_to_year: "",
    last_renewal_to_month: "",
    last_renewal_to_day: "",
    last_renewal_from_year: "",
    last_renewal_from_month: "",
    last_renewal_from_day: "",
    product_code: "nLFrfbH2RGAoULAiqsoSST",
    get_third_party_insurance: false,
  });

  const history = useHistory();

  const handleInput = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setPost({ ...post, [name]: value });
  };

  const handleCheckbox = (event) => {
    setPost({ ...post, get_third_party_insurance: event.target.checked });
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const last_renewal_to = `${post.last_renewal_to_year}-${post.last_renewal_to_month}-${post.last_renewal_to_day}`;
    const last_renewal_from = `${post.last_renewal_from_year}-${post.last_renewal_from_month}-${post.last_renewal_from_day}`;

    try {
      const response = await axios.post(
        "http://localhost:3005/api/details",
        {
          vehicle_type: post.vehicle_type,
          manufacture_year: post.manufacture_year,
          engine_capacity: post.engine_capacity,
          last_renewal_to,
          last_renewal_from,
          product_code: post.product_code,
          get_third_party_insurance: post.get_third_party_insurance,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-company-id": company, // set company identifier in headers
          },
        }
      );

      console.log("Response:", response.data);
      history.push({
        pathname: "/details",
        state: response.data,
      });
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="bluebook-container">
      <form onSubmit={handleSubmit}>
        <div>
          <div className="Vehicle-type-cont">
            <div>
              <label htmlFor="Vehicle-type">
                Vehicle Type <span>*</span>
              </label>
            </div>
            <select
              name="vehicle_type"
              className="vehicle-type"
              id=""
              placeholder="Select Vehicle Type"
              onChange={handleInput}
            >
              <option value="2w">Two Wheeler</option>
              <option value="4w">Four Wheeler</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="manufacture_year">
            Year of Manufacture(YYYY) AD <span>*</span>
          </label>
        </div>
        <input
          type="text"
          name="manufacture_year"
          id=""
          className="manu-inp"
          placeholder="Manufacture Year (YYYY) AD"
          onChange={handleInput}
          required
        />
        <div>
          <label htmlFor="engine_capacity">
            Vehicle Cubic Capacity (CC) <span>*</span>
          </label>
        </div>
        <input
          type="text"
          name="engine_capacity"
          id=""
          className="manu-inp"
          placeholder="Vehicle Cubic Capacity (CC)"
          onChange={handleInput}
          required
        />
        <div>
          <label htmlFor="last_renewal_from">Last Renewal From (BS)</label>
          <div className="last-renewal">
            <input
              type="text"
              name="last_renewal_from_year"
              id=""
              className="inp-bs"
              placeholder="Year"
              onChange={handleInput}
              required
            />
            <input
              type="text"
              name="last_renewal_from_month"
              id=""
              className="inp-bs"
              placeholder="Month"
              onChange={handleInput}
              required
            />
            <input
              type="text"
              name="last_renewal_from_day"
              id=""
              className="inp-bs"
              placeholder="Day"
              onChange={handleInput}
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="last_renewal_to">Last Renewal To (BS)</label>
          <div className="last-renewal">
            <input
              type="text"
              name="last_renewal_to_year"
              id=""
              className="inp-bs"
              placeholder="Year"
              onChange={handleInput}
              required
            />
            <input
              type="text"
              name="last_renewal_to_month"
              id=""
              className="inp-bs"
              placeholder="Month"
              onChange={handleInput}
              required
            />
            <input
              type="text"
              name="last_renewal_to_day"
              id=""
              className="inp-bs"
              placeholder="Day"
              onChange={handleInput}
              required
            />
          </div>
        </div>
        <div className="checkbox-container">
          <input
            type="checkbox"
            name="get_third_party_insurance"
            id="get_third_party_insurance"
            onChange={handleCheckbox}
          />
          <label htmlFor="get_third_party_insurance">
            Third-party Insurance
          </label>
        </div>
        <div>
          <button className="calculate" type="submit">
            Calculate
          </button>
        </div>
      </form>
    </div>
  );
};

export default BluebookService;
