import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Link,
} from "react-router-dom";

import ABout from "./Day 1-2 - component/ABout";
import Home from "./Day 1-2 - component/home";
import Vashi from "./Day 1-2 - component/Vashi";
import Bandra from "./Day 1-2 - component/Bandra";

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <Router>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index path="/" Component={Home} />
          <Route path="/about" Component={ABout} />
          <Route path="vashi" Component={Vashi} />
          <Route path="bandra" Component={Bandra} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
