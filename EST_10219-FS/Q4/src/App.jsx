import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const navClassName = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <div className="app">
      <nav className="navbar">
        <NavLink to="/" end className={navClassName}>
          Home
        </NavLink>
        <NavLink to="/about" className={navClassName}>
          About
        </NavLink>
        <NavLink to="/contact" className={navClassName}>
          Contact
        </NavLink>
      </nav>

      <main className="page-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
