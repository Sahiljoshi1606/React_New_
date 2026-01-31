import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import List from "./List";
import Details from "./Details";


function PostHub() {
  const [theme, setTheme] = useState("light");

  return (
    <div className={theme}>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>

      < Routes>
      <Route path="/" element={<List/>}/>
      < Route path="/post/:id" element= {<Details/>}/>
      </Routes>
    </div>
  );
}

export default PostHub;
