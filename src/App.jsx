import { useState, useEffect } from "react"
import { io } from "socket.io-client"

function App() {
  const [amount, setAmount] = useState([])
  const [total, setTotal] = useState(0)
  // const socket = io("http://localhost:3500")
  const socket = io("https://spending-yp1e.onrender.com")

  useEffect(() => {
    socket.on("receive", (data) => {
      setAmount([...amount, data])
      console.log(data)
      setTotal(() => total + data)
    })
  }, [socket])
  return <div>{total}</div>
}

export default App
