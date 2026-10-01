import "./App.css";

import FacialExpression from "./components/FacialExpression";
import MoodSongs from "./components/MoodSongs";
import { useState } from "react";

function App() {
  const [Songs, setSongs] = useState([]);

  return (
    <>
      <FacialExpression setSongs={setSongs} />
      <MoodSongs Songs={Songs} />
    </>
  );
}

export default App;
