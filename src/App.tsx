import { useState } from "react";
import LOWcodeEditor from "./editor";

function App() {
  const [count, setCount] = useState(0);

  return <LOWcodeEditor />;
}

export default App;
