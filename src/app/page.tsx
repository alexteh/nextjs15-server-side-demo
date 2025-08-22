"use client"

import { useEffect, useState } from "react"

export default function Home() {
  const [messages, setMessages] = useState<string[]>([])
  const [input, setInput] = useState("")

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:3000/ws") // Use wss:// in production

    ws.onopen = () => {
      console.log("WebSocket connected")
    }

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data)
        setMessages((prev) => [...prev, data.message || data.data])
      } catch (error) {
        console.error("Parse error:", error)
      }
    }

    ws.onclose = () => {
      console.log("WebSocket disconnected")
      // Optional: Reconnect logic with exponential backoff
    }

    ws.onerror = (error) => {
      console.error("WebSocket error:", error)
    }

    return () => {
      ws.close()
    }
  }, [])

  const sendMessage = () => {
    if (input) {
      const ws = new WebSocket("ws://localhost:3000/ws") // Re-open if needed; better to reuse
      ws.send(input)
      setInput("")
    }
  }

  return (
    <div className='p-4'>
      <ul>
        {messages.map((msg, idx) => (
          <li key={idx}>{msg}</li>
        ))}
      </ul>
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className='border p-2'
      />
      <button onClick={sendMessage} className='ml-2 bg-blue-500 text-white p-2'>
        Send
      </button>
    </div>
  )
}
