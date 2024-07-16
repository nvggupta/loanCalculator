import React, { useContext } from 'react';
import { InputContext } from './CalculatorContext/InputContext';

function Tenure() {
  const tenureContext = useContext(InputContext);
  const generateMonths = (e) => {
    tenureContext.setMonths(Number(e.target.value));
  }

  return (
    <div className="w-1/2 flex flex-col gap-5 m-5">
      <h5>Tenure</h5>
      <select onChange={generateMonths} className="w-full p-2 border rounded">
        <option value="5">5 years</option>
        <option value="10">10 years</option>
        <option value="15">15 years</option>
        <option value="20">20 years</option>
        <option value="25">25 years</option>
      </select>
    </div>
  );
}

export default Tenure;
