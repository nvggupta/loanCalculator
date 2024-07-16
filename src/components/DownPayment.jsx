import React, { useContext } from 'react';
import { InputContext } from './CalculatorContext/InputContext';

function DownPayment() {
  const InputsGenerator = useContext(InputContext);
  const generateDownPayment = (e) => {
    InputsGenerator.setDownPayment(Number(e.target.value));
  }

  return (
    <div className='w-1/2 flex flex-col gap-5 m-5'>
      <h5>Down Payment</h5>
      <span>{InputsGenerator.DownPayment}</span>
      <input className='w-full' type='range' min={0} max={InputsGenerator.homeValue} step={100} value={InputsGenerator.DownPayment} onChange={generateDownPayment}></input>
      <div className='w-full flex justify-between'>
        <span>$0</span>
        <span>${InputsGenerator.homeValue}</span>
      </div>
    </div>
  );
}

export default DownPayment;
