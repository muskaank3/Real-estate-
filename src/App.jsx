import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Home2 from './Components/Home2/Home2';
import Footer from './Components/Footer/Footer';
import { Routes, Route } from "react-router-dom";

import Contact from './Components/Contact/Contact';
import Services from './Components/Services/Services';
import Blog from './Components/Blog/Blog';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';





function App() {
  return (
    <>
      {/* Navbar har page pe */}
      <Navbar />

      <Routes>
        {/* Default Home Page */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <Home2 />
            </>
          }
        />

        {/* Other Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
       
      </Routes>

      {/* Footer har page pe */}
      <Footer />
    </>
  );
}

export default App;
