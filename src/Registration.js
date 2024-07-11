import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Registration = ({ company }) => {
  const location = useLocation();
  if (!location.state?.response_detail) {
    window.location.replace("/");
  }

  const { response_detail, hl_service_log } = location.state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="registration">
      <div>
        <p className="Invoice">Invoice</p>
        <table>
          <thead>
            <tr>
              <th>Particular</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Unpaid Tax</td>
              <td>Rs. {response_detail.unpaid_tax}</td>
            </tr>
            <tr>
              <td>Unpaid Tax Fine</td>
              <td>Rs. {response_detail.unpaid_tax_fine_amt}</td>
            </tr>
            <tr>
              <td>Tax(Current Year)</td>
              <td>Rs. {response_detail.tax_cy}</td>
            </tr>
            <tr>
              <td>Tax Fine(Current Year)</td>
              <td>Rs. {response_detail.tax_fine_cy}</td>
            </tr>
            <tr>
              <td>Renewal Charge</td>
              <td>Rs. {response_detail.renewal_charge}</td>
            </tr>
            <tr>
              <td>Renewal Fine</td>
              <td>Rs. {response_detail.renewal_fine}</td>
            </tr>
            <tr>
              <td>Model Tax</td>
              <td>Rs. {response_detail.modal_tax}</td>
            </tr>
            <tr>
              <td>Insurance Amount</td>
              <td>Rs. {response_detail.insurance}</td>
            </tr>
            <tr>
              <td>Service Charge</td>
              <td>Rs. {response_detail.service_charge}</td>
            </tr>
            <tr>
              <td>Total Amount</td>
              <td>Rs. {response_detail.total_amount}</td>
            </tr>
          </tbody>
        </table>

        <div className="cont-reg-div">
          <Link
            to={{
              pathname: "/form",
              state: {
                ins: response_detail.insurance,
                total_amount: response_detail?.total_amount ?? "",
                hl_service_log: hl_service_log,
              },
            }}
            className="cont-registration-btn"
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;
