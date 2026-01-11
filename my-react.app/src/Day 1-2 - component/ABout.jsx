import { NavLink, Route, Routes } from "react-router-dom";

import Vashi from "./Vashi";
import Bandra from "./Bandra";

export default function ABout() {
  return (
    <div>
      <h2>About Page</h2>

      <ul>
        <li>
          <NavLink
            to="vashi"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Vashi
          </NavLink>
        </li>
        <li>
          <NavLink
            to="bandra"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Bandra
          </NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="vashi" Component={Vashi} />
        <Route path="bandra" Component={Bandra} />
      </Routes>
    </div>
  );
}
