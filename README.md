

# 🟦 Frontend README (`frontend/README.md`)

```markdown
# Matchkin Chat – Frontend

A modern, real-time chat application frontend built with **React (Vite)**, styled to match Matchkin’s branding.  
Connects to a Node.js + Socket.IO backend for authentication and messaging.

---

## 🚀 Features

- OTP-based login (secure, passwordless)
- Protected chat interface (JWT auth)
- Real-time messaging (Socket.IO)
- Responsive, glassmorphism UI
- Modern React with hooks and functional components

---

## 🛠️ Tech Stack

- [React](https://react.dev/) (with Vite)
- [Socket.IO Client](https://socket.io/)
- [React Router](https://reactrouter.com/)
- CSS (custom, modern, glassy style)

---

## 🔧 Setup & Run Locally

1. **Clone the repo:**
   ```
   git clone https://github.com/yourusername/matchkin-chat-frontend.git
   cd matchkin-chat-frontend
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Create a `.env` file:**
   ```
   VITE_API_URL=https://your-backend-url.com
   VITE_WS_URL=your-backend-url.com
   ```

4. **Start the dev server:**
   ```
   npm run dev
   ```

5. **Build for production:**
   ```
   npm run build
   ```

---

## 🌐 Live Demo

[Live App](https://your-frontend-url.vercel.app)

---

## 📸 Screenshots

![Login Page](./screenshots/login.png)
![Chat Page](./screenshots/chat.png)

---

## 📁 Folder Structure

```
src/
  components/    # Reusable UI components
  pages/         # Login, Chat, NotFound pages
  App.js         # Main router and app logic
  style.css      # Main styles
```
