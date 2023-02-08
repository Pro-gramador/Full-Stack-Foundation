import React, { useState } from "react";
import ReactDOM from "react-dom";

const Anecdote = ({ handleSelect, votes, handleVotes }) => {
  return (
    <div>
      <p>has {votes} votes</p>

      <button onClick={handleVotes}>Vote</button>
      <button onClick={handleSelect}>Next anecdote</button>
    </div>
  );
};

const App = () => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));
  const [maxVote, setMaxVote] = useState(0);

  const handleSelect = () => {
    let rand = generateRandom(anecdotes.length);
    while (rand === selected) {
      rand = generateRandom(anecdotes.length);
    }
    setSelected(rand);
  };

  const handleVote = () => {
    const newPoints = [...points];
    newPoints[selected] += 1;
    setPoints(newPoints);
    mostVoted();
  };

  const mostVoted = () => {
    let max = 0;

    for (const point in points) {
      if (points[point] > max) {
        max = points[point];
        setMaxVote(point);
      }
    }
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <Anecdote
        handleSelect={handleSelect}
        votes={points[selected]}
        handleVotes={handleVote}
      />
      <div>
        <br />
        <h1>Anecdote with most votes</h1>
        <div>{anecdotes[maxVote]}</div>
        <p>It has {maxVote} votes</p>
      </div>
    </div>
  );
  function generateRandom(length) {
    return Math.floor(Math.random() * length);
  }
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
