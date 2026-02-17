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
import Calculator from "./Day-3-component/useState-calculator";
import Theam from "./Day-3-component/Theam";
import UseREF from "./Day-4-component/UseREF";
import UseEffect_UseNavigate from "./UseEffect_UseNavigate";
import Project from "./Project/Project";

function App() {
  return (
    <>
      {/* <Router>
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
      </Router> */}
      {/* < Calculator/> */}
      {/* < Theam/> */}
      {/* < UseREF/> */}
      {/* <UseEffect_UseNavigate /> */}
      < Project/>
    </>
  );
}

export default App;
