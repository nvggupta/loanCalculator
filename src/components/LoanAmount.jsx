import React, { useContext } from 'react';
import { InputContext } from './CalculatorContext/InputContext';

function LoanAmount() {
  const InputsGenerator = useContext(InputContext);

  return (
    <div className='w-1/2 flex flex-col gap-5 m-5'>
      <h5>Loan Amount</h5>
      <span>{InputsGenerator.loanAmount}</span>
      <input className='w-full' type='range' min={0} max={InputsGenerator.homeValue} step={100} value={InputsGenerator.loanAmount} readOnly></input>
      <div className='w-full flex justify-between'>
        <span>$0</span>
        <span>${InputsGenerator.homeValue}</span>
      </div>
    </div>
  );
}

export default LoanAmount;
