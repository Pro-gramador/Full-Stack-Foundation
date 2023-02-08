import React, {useState} from "react";
import ReactDOM from "react-dom/client";

const Headings = ({heading}) => {
  return <h1>{heading}</h1>
}

const Button = ({ text, countHandler, totalHandler}) => {
   const handleClick = () => {
    countHandler()
    totalHandler()
   }
   return <button onClick={handleClick}>{text}</button>
}


const Statistics = ({good, neutral, bad, total}) => {
  return total > 0 ? (
    <table>
      <tbody>
        <Statistic text='Good'          value={good} />
        <Statistic text='Neutral'       value={neutral} />
        <Statistic text='Bad'           value={bad} />
        <Statistic text='Total'         value={total} />
        <Statistic text='Average'       value={(good - bad) / total} />
        <Statistic text='Positive rate' value={`${(good / total * 100)}`} />
      </tbody>
    </table>
  ) : 
  <p>No feedback yet</p>
} 

const Statistic = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)



  return (
    <div>
      <Headings heading='Give feedback' />
      <Button text='Good' countHandler={() => setGood(good + 1)} totalHandler={() => setTotal(total + 1)} />
      <Button text='Neutral' countHandler={() => setNeutral(neutral + 1)} totalHandler={() => setTotal(total + 1)} />
      <Button text='Bad' countHandler={() => setBad(bad + 1)} totalHandler={() => setTotal(total + 1)} />
      <Headings heading='Statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
