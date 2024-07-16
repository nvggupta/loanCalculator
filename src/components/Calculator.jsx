import React from "react";
import Chart from "./Chart";
import Range from "./Range";
import DownPayment from "./DownPayment";
import LoanAmount from "./LoanAmount";
import IntrestRate from "./IntrestRate";
import Tenure from "./Tenure";

function Calculator() {
  return (
    <div className="flex  items-center">
      <div className="w-full max-w-4xl">
        <Range />
        <DownPayment />
        <LoanAmount />
        <IntrestRate />
        <Tenure />
      </div>
      <Chart />
    </div>
  );
}

export default Calculator;
