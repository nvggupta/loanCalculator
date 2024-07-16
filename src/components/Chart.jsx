import React, { useContext } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { InputContext } from './CalculatorContext/InputContext';

ChartJS.register(ArcElement, Tooltip, Legend);

function Chart() {
  const { loanAmount, rate, months } = useContext(InputContext);
  const principle = loanAmount;
  const interest = (loanAmount * rate * months) / 100;

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Loan Calculator</h2>
      <Pie
        style={{ height: '300px', width: '300px' }}
        data={{
          labels: ['Principle', 'Interest'],
          datasets: [
            {
              backgroundColor: ['#41B883', '#E46651'],
              data: [principle, interest],
            },
          ],
        }}
      />
      <h3 className="text-lg font-semibold mt-4">Monthly Payment: {((principle + interest) / (months * 12)).toFixed(2)}</h3>
    </div>
  );
}

export default Chart;
