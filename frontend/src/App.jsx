import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Jika pengguna mengunjungi root URL, langsung arahkan mereka ke "/dashboard" */}
        <Route path="/" element={<Navigate to="/dashboard" />} />

        {/* Halaman Dashboard */}
        <Route path="dashboard" element={<Dashboard />} />

        {/* Halaman Register */}
        <Route path="register" element={<Register />} />

        {/* Halaman Login */}
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
