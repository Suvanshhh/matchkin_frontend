
### ✅ New `README.md` for `matchkin-chat-frontend`

````markdown
# 💬 Matchkin Chat – Frontend

A sleek, real-time chat application frontend built using **React (Vite)**, designed with modern UI principles (glassmorphism, responsiveness) and integrated with secure OTP-based authentication. Built for Matchkin's Internship Challenge.

---

## ✨ Features

- 🔐 **OTP-based Email Login**  
  Passwordless authentication with secure token handling.

- 💬 **Real-Time Messaging**  
  Powered by **Socket.IO**, supports group and private chats.

- 🔄 **JWT-Based Session Handling**  
  Secure API communication using JSON Web Tokens.

- 📱 **Responsive UI**  
  Works across all screen sizes with mobile-first design.

- 🌟 **Glassmorphism UI**  
  Styled with modern CSS for a premium user experience.

---

## ⚙️ Tech Stack

| Layer     | Tech                |
|-----------|---------------------|
| Framework | React (Vite) |
| Styling   | Vanilla CSS (Glass UI) |
| Routing   | React Router |
| Real-time | Socket.IO Client| 
| Auth      | JWT + OTP-based via backend |

---

## 🚀 Getting Started (Local Setup)

1. **Clone the Repository**

```bash
git clone https://github.com/Suvanshhh/matchkin_frontend.git
cd matchkin-chat-frontend
````

2. **Install Dependencies**

```bash
npm install
```

3. **Create Environment Variables**

Create a `.env` file in the root with:

```env
VITE_API_URL=https://backendmatchkin-production.up.railway.app
VITE_WS_URL=backendmatchkin-production.up.railway.app
```

4. **Start Development Server**

```bash
npm run dev
```

5. **Build for Production**

```bash
npm run build
```

---

## 🌐 Live Demo

🔗 [View Deployed App](https://matchkin-frontend.vercel.app/)

---

## 📁 Project Structure

```
src/
├── components/      # UI components (InputBox, ChatCard, etc.)
├── pages/           # Login, Chat, NotFound
├── index.js
├── index.css
├── App.jsx          # Routing logic
├── style.css        # Global styles (Glassmorphism)
└── main.jsx         # Entry point
```

---


## Working Demo (Screenshots)
<img src="https://github.com/user-attachments/assets/459d5eb1-4a74-4f25-8c21-749623c71b4d" width="500"/>
<img src="https://github.com/user-attachments/assets/74419d8b-ecd9-4d99-b224-f4456b4facda" width="500"/>
<img src="https://github.com/user-attachments/assets/b94f4e55-afc7-4bb4-b485-09c9c900fec0" width="500"/>

---

## Working Demo (Video)
🔗 [View Working Video](https://drive.google.com/drive/folders/1oCPkmXL5lwhYuVpyBrEK72YShq9Hw_Xz)

## 🧪 Testing Guide

* ✅ **Login Flow**
  Enter a valid email > check console OTP > login > token stored in localStorage.

* ✅ **Messaging Flow**
  Type & send messages in a group/private chat. Real-time updates confirmed.

* ✅ **Auth Check**
  Navigate to `/chat` without token → auto-redirects to `/login`.

---

