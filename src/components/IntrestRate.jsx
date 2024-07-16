import React, { useContext } from 'react';
import { InputContext } from './CalculatorContext/InputContext';

function IntrestRate() {
  const InputsGenerator = useContext(InputContext);
  const generateIntrest = (e) => {
    InputsGenerator.setRate(Number(e.target.value));
  }

  return (
    <div className='w-1/2 flex flex-col gap-5 m-5'>
      <h5>Interest Rate %</h5>
      <span>{InputsGenerator.rate}</span>
      <input className='w-full' type='range' min={0} max={18} step={1} value={InputsGenerator.rate} onChange={generateIntrest}></input>
      <div className='w-full flex justify-between'>
        <span>0%</span>
        <span>18%</span>
      </div>
    </div>
  );
}

export default IntrestRate;
