import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import axios from "axios";

const PaymentCallback = () => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    async function savePaymentConfirmation() {
      try {
        const response = await axios.get("http://localhost:3005/api/payment-confirmation", {
          params: {
            pidx: params.get("pidx"),
            transaction_id: params.get("transaction_id"),
            tidx: params.get("tidx"),
            amount: params.get("amount"),
            mobile: params.get("mobile"),
            status: params.get("status"),
            purchase_order_id: params.get("purchase_order_id"),
            purchase_order_name: params.get("purchase_order_name"),
          },
        });

        if (response.data.success) {
          history.push("/payment-success");
        } else {
          history.push("/payment-failed");
        }
      } catch (error) {
        console.error("Payment Confirmation Error:", error);
        history.push("/payment-failed");
      }
    }

    savePaymentConfirmation();
  }, [location, history]);

  return (
    <div>
      <h1>Processing your payment</h1>
    </div>
  );
};

export default PaymentCallback;
