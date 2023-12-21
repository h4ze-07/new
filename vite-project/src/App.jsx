import { Children, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button'

const now = new Date();

function App() {
  const [title, setTitle] = useState('write ur feelings today');
  const [date, setDate] = useState('')
  const [text, setText] = useState('')

  const inpRef = useRef(null)

  const clearInp = () => inpRef.current.value = '';

  const buttonClick = () => {
    setTitle(inpRef.current.value);
    clearInp()
    setDate(now.toLocaleTimeString())
  }

  const handleTextChange = (data) => {
    setText(data)
  }

  return (
    <>
      <Header title={title} date={date} change={handleTextChange} />
      <div>Hello!</div>
      <p>Building React app</p>
      <input type="text"  ref={inpRef}/>
      <button onClick={buttonClick}>To title</button>
      <div>{text}</div>
      <Button>
        <p>
          this is
          <span>children</span>
        </p>
      </Button>
    </>
  )
}

export default App

const Header = ({title, date, change}) => {

  const [time, setTime] = useState(new Date())

  setInterval(() => setTime(new Date()), 1000)

  const handleChange = (e) => {
    change(e.target.value)
  }

  return (
    <>
      <div>{title}, {date}</div>
      <input type="text" onChange={event => handleChange(event)} />
      <Button />
      <div>{time.toLocaleTimeString()}</div>
    </>
  )
}