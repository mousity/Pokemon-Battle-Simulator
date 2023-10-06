import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import io from 'socket.io-client'
const socket = io.connect("http://localhost:4000")

function App() {
  const [count, setCount] = useState(0);
  const sendMessage = () => {
    socket.emit("send_message", { message: "hello"});
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      alert(data.message);
    })
  }, [socket])
  return (
    <>
      <div>
        <input placeholder='Message...' />
        <button onClick={sendMessage}>Send Message</button>
      </div>
    </>
  )
}

export default App
