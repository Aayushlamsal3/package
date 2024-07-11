import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const PaymentConfirmation = () => {
  const location = useLocation();
  const [isPaymentVerified, setIsPaymentVerified] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    handlePaymentConfirmation();
  }, []); // Only run once on component mount

  const handlePaymentConfirmation = async () => {
    try {
      const { search } = location;
      const params = new URLSearchParams(search);

      // Extract required parameters from the query string
      const pidx = params.get("pidx");
      const status = params.get("status");
      const transaction_id = params.get("transaction_id");
      const tidx = params.get("tidx");
      const amount = params.get("amount");
      const total_amount = params.get("total_amount");
      const mobile = params.get("mobile");
      const purchase_order_id = params.get("purchase_order_id");
      const purchase_order_name = params.get("purchase_order_name");

      if (status === "Completed") {
        // Make a POST request to your backend API to verify payment
        const response = await axios.post(
          "http://localhost:3005/api/verify-payment",
          {
            pidx,
            transaction_id,
            tidx,
            amount,
            total_amount,
            mobile,
            status,
            purchase_order_id,
            purchase_order_name,
          }
        );

        if (response.data.success) {
          // Payment verified successfully, update state
          setIsPaymentVerified(true);
        } else {
          // Handle payment verification failure
          console.error("Payment verification failed:", response.data.error);
          setErrorMessage("Payment verification failed. Please try again.");
        }
      } else {
        // Handle non-completed status (Pending, User canceled, etc.)
        console.log(`Payment status: ${status}`);
        setErrorMessage(`Payment status: ${status}. Please try again.`);
      }
    } catch (error) {
      console.error("Error verifying payment:", error);
      setErrorMessage("Error verifying payment. Please try again.");
    }
  };

  return (
    <div className="payment-confirmation-wrapper">
      <div className="payment-confirmation-container">
        <div className="payment-confirmation-content">
          {isPaymentVerified ? (
            <>
              <h2>Thank You for Your Payment!</h2>
              <p>Your payment has been confirmed successfully.</p>
              <Link to="/" className="green-button">
                Go Back Home
              </Link>
            </>
          ) : (
            <p>{errorMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentConfirmation;
