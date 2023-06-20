import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components"; // import components
import { Home, Contact, Login, Register, Reset } from "./pages"; // import pages

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
        </Routes>
        <Footer />
      </Router>
      App
    </>
  );
}

export default App;
