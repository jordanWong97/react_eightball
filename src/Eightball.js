import { useState } from "react";
import "./Eightball.css";

const EIGHTBALL_ANSWERS = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
];

/** Generates an eightball response with a random message and color from
 * EIGHTBALL_ANSWERS
 *
 * Props:
 * - answers
 *
 * State:
 * - {
 *    msg: 'think of a question',
 *    color: 'black'
 * }
 *
 * Renders Eightball on DOM
 *
 * */

function Eightball({ answers = EIGHTBALL_ANSWERS }) {

  const originalState = {
    msg: "think of a question",
    color: "black"
  };



  // function counter() {
  //   let counter = {};
  //   if (counter[color]) {
  //     counter[color]++;
  //   }
  // }

  const [answer, setAnswer] = useState(originalState);
  const [count, setCount] = useState('0');

  function changeAns() {
    const randomIndex = Math.floor(Math.random() * answers.length);
    setAnswer(answers[randomIndex]);

    // setCount(colorCounter);
  }

  function reset() {
    setAnswer(originalState);
  }

  return (
    <div>
      <div
        onClick={changeAns}
        className='eightball'
        style={{
          backgroundColor: `${answer.color}`
        }}>

        <h3>{answer.msg}</h3>
      </div>
      <p>{count}</p>
      <button onClick={reset}>Reset</button>

    </div>
  );
}



export default Eightball;