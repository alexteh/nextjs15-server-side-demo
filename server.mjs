// server.ts
import { createServer } from "http"
import next from "next"
import { WebSocketServer } from "ws"

const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = createServer((req, res) => handle(req, res))

  // Create WebSocket server
  const wss = new WebSocketServer({ server })

  wss.on("connection", (ws) => {
    console.log("Client connected")

    ws.on("message", (message) => {
      console.log("received:", message.toString())
      // echo back
      ws.send(`Server says: ${message}`)
    })

    ws.on("close", () => console.log("Client disconnected"))
  })

  const PORT = process.env.PORT || 3000
  server.listen(PORT, () => console.log(`> Ready on http://localhost:${PORT}`))
})
