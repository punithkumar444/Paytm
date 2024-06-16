import React from "react";
import { useNavigate } from "react-router-dom";

export const TransactionSuccess = () => {
  const navigate = useNavigate();

  const handleBackToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-green-100">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Transaction Successful</h1>
        <p className="text-gray-700 mb-8">Your transaction has been completed successfully.</p>
        
        <div className="text-left mb-6">
          <p><strong>Transaction ID:</strong> 123456789</p>
          <p><strong>Amount:</strong> 100.00</p>
          <p><strong>Date:</strong> June 14, 2024</p>
        </div>

        <button
          onClick={handleBackToDashboard}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};