import { createContext, useEffect, useState } from "react";

export const InputContext = createContext(null);

export const InputProvider = (props) => {
  const [homeValue, setHomeValue] = useState(1000);
  const [DownPayment, setDownPayment] = useState(0);
  const [loanAmount, setLoanAmount] = useState(1000);
  const [rate, setRate] = useState(1);
  const [months, setMonths] = useState(5);
  const [intrestAmount, setIntrestAmount] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  function CalculateLoan() {
    const M = months * 12;
    const r = (rate / 100) / 12;
    const monthlyPayment = (loanAmount * r * (1 + r) ** M) / ((1 + r) ** M - 1);

    const totalInterestGenerated = monthlyPayment * M - loanAmount;
    setMonthlyPayment(monthlyPayment);
    setIntrestAmount(totalInterestGenerated);
  }

  useEffect(() => {
    setLoanAmount(homeValue - DownPayment);
  }, [homeValue, DownPayment]);

  useEffect(() => {
    CalculateLoan();
  }, [homeValue, DownPayment, loanAmount, rate, months]);

  return (
    <InputContext.Provider value={{ homeValue, setHomeValue, DownPayment, setDownPayment, loanAmount, setLoanAmount, rate, setRate, months, setMonths, intrestAmount, monthlyPayment }}>
      {props.children}
    </InputContext.Provider>
  );
}
