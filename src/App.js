import React, {useState, useEffect} from "react";
import Popup from "./components/Popup";

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);  
  const [timePopup, setTimePopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimePopup(true)
    }, 2000)
  }, [])
  return (
    <div className="App">
      <main>
        <h1>React Popups</h1>
        <br></br>
        <button onClick= {() => setButtonPopup(true)}>Open Popup</button>
      </main>
      
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>My Button Popup</h3>
        <p>This is my triggered button Popup</p>
      </Popup>
      <Popup trigger={timePopup} setTrigger={setTimePopup}>
        <h3>My Time Popup</h3>
        <p>This is my triggered time Popup</p>
      </Popup>
    </div>
  );
}

export default App;