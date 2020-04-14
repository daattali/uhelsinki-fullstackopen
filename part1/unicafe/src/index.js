import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({setter, value, text}) => {
  const handler = () => setter(value + 1)
  return (
    <button onClick={handler}>{text}</button>
  )
}

const Statistic = ({text, value, post}) => (
  <tr>
    <td>{text}</td>
    <td>{value} {post}</td>
  </tr>
)

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = good / all * 100  
  
  if (all === 0) {
    return (
      "No feedback given"
    )
  }

  return (
    <table>
      <tbody>
        <Statistic value={good} text="good" />
        <Statistic value={neutral} text="neutral" />
        <Statistic value={bad} text="bad" />
        <Statistic value={all} text="all" />
        <Statistic value={average} text="average" />
        <Statistic value={positive} text="positive" post="%" />
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button value={good} setter={setGood} text="good" />
      <Button value={neutral} setter={setNeutral} text="neutral" />
      <Button value={bad} setter={setBad} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
