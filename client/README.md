# Notes App (Fullstack)

## Quick start

You'll run two folders: `server` and `client`.

### Server
1. Open terminal, go to `server` folder:
   ```
   cd server
   npm install
   ```
2. Copy `.env.example` to `.env` and edit `MONGO_URI` if needed.
3. Start server:
   ```
   npm run dev
   ```
   Server will run on port 5000 by default.

### Client
1. Open another terminal, go to `client`:
   ```
   cd client
   npm install
   npm run dev
   ```
2. Open http://localhost:5173

The client talks to the server at http://localhost:5000 (default).
