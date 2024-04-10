import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>MyLogo</h1>
        <nav>
          <NavLink to='/'> Home </NavLink>
          <NavLink to='/about'>About</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
