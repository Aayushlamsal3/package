import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import NoTerms from "./NoTerms";

const FinalPage = ({ company }) => {
  const location = useLocation();
  const [showAlert, setShowAlert] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const paymentRequest = {
        return_url: "http://localhost:3000/payment-confirmation",
        website_url: "http://localhost:3000",
        amount: location.state.total_amount * 100, // Convert to paisa
        purchase_order_id: "Order_" + new Date().getTime(),
        purchase_order_name: "Bluebook Renewal",
        customer_info: {
          name: location.state.user_data.fullname,
          email: location.state.user_data.email,
          phone: location.state.user_data.contactnumber,
        },
      };

      const initiateResponse = await axios.post(
        "http://localhost:3005/api/initiate-payment",
        paymentRequest,
        {
          headers: {
            "Content-Type": "application/json",
            "x-company-id": company, //company identifier
          },
        }
      );

      if (initiateResponse.data.payment_url) {
        window.location.href = initiateResponse.data.payment_url;
      } else {
        console.error("Failed to initiate payment", initiateResponse.data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  if (!location.state?.user_data) {
    window.location.replace("/");
  }

  const { total_amount } = location.state;

  return (
    <div className="payment-confirmation-wrapper">
      <div className="MAIN-BOX">
        <NoTerms />
        <div className="Big-Box-three">
          <div className="total-form-big">
            <span>Rs. {total_amount}</span>
            <p>Total Payable Amount</p>
          </div>
          <div className="payment-btn">
            <button>
              <a href="/" className="final-goback-link">
                {" "}
                Back to Home
              </a>
            </button>
            <button onClick={handleSubmit} className="final-submit">
              Pay with Khalti
            </button>
          </div>
          {showAlert && (
            <div className="alert">
              Thanks for submitting the form! We'll contact you soon!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FinalPage;
