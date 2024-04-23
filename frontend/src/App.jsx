import './App.css'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Jika pengguna mengunjungi root URL, langsung arahkan mereka ke "/dashboard" */}
        <Route path="/" element={<Navigate to="/dashboard" />} />

        {/* Halaman Dashboard */}
        <Route path="dashboard" element={<Dashboard />} />

        {/* Halaman About */}
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
