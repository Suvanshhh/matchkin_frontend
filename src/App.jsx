// import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Login from './pages/Login';
// import Chat from './pages/Chat';

// const App = () => {
//   const [token, setToken] = useState(localStorage.getItem('token'));

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login setToken={setToken} />} />
//         <Route path="/chat" element={token ? <Chat token={token} /> : <Navigate to="/" />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;


import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Chat from "./pages/Chat";

const ProtectedRoute = ({ token, children }) => {
  if (!token) return <Navigate to="/" />;
  return children;
};

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setToken={setToken} />} />
        <Route
          path="/chat"
          element={
            <ProtectedRoute token={token}>
              <Chat token={token} onLogout={handleLogout} />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to={token ? "/chat" : "/"} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
