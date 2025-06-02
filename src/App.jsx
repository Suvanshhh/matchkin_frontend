
// import React, { useState } from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Login from "./pages/Login";
// import Chat from "./pages/Chat";

// const ProtectedRoute = ({ token, children }) => {
//   if (!token) return <Navigate to="/" />;
//   return children;
// };

// const App = () => {
//   const [token, setToken] = useState(localStorage.getItem("token"));

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setToken(null);
//   };

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login setToken={setToken} />} />
//         <Route
//           path="/chat"
//           element={
//             <ProtectedRoute token={token}>
//               <Chat token={token} onLogout={handleLogout} />
//             </ProtectedRoute>
//           }
//         />
//         <Route path="*" element={<Navigate to={token ? "/chat" : "/"} />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;


import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

const ProtectedRoute = ({ token, children }) => (
  token ? children : <Navigate to="/" />
);

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <BrowserRouter>
      <Header userEmail={token ? parseJwt(token).email : null} onLogout={handleLogout} />
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
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

function parseJwt(token) {
  if (!token) return {};
  try { return JSON.parse(atob(token.split('.')[1])); } catch { return {}; }
}

export default App;
