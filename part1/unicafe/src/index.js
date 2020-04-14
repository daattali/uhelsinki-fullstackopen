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
  const calculateAll = () => good + neutral + bad
  const calculateAverage = () => (good - bad) / calculateAll()
  const calculatePositive = () => good / calculateAll() * 100  
  
  if (calculateAll() === 0) {
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
        <Statistic value={calculateAll()} text="all" />
        <Statistic value={calculateAverage()} text="average" />
        <Statistic value={calculatePositive()} text="positive" post="%" />
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

// import React, { useState } from 'react'
// import ReactDOM from 'react-dom'

// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }

//   return (
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }

// const Button = ({ onClick, text }) => (
//   <button onClick={onClick}>
//     {text}
//   </button>
// )

// const App = (props) => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     setLeft(left + 1)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }

//   return (
//     <div>
//       <div>
//         {left}
//         <Button onClick={handleLeftClick} text='left' />
//         <Button onClick={handleRightClick} text='right' />
//         {right}
//         <History allClicks={allClicks} />
//       </div>
//     </div>
//   )
// }

// ReactDOM.render(<App />, document.getElementById('root'))
