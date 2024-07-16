import React, { useContext } from 'react';
import { InputContext } from './CalculatorContext/InputContext';

function Range() {
  const InputsGenerator = useContext(InputContext);
  const generateHomeValue = (e) => {
    InputsGenerator.setHomeValue(Number(e.target.value));
  }

  return (
    <div className='w-1/2 flex flex-col gap-5 m-5'>
      <h5>Home Value</h5>
      <span>{InputsGenerator.homeValue}</span>
      <input className='w-full' type='range' min={1000} max={10000} step={100} value={InputsGenerator.homeValue} onChange={generateHomeValue}></input>
      <div className='w-full flex justify-between'>
        <span>$1000</span>
        <span>$10000</span>
      </div>
    </div>
  );
}

export default Range;
