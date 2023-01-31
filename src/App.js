import logo from "./logo.svg";
import "./App.css";
import Draggable from "react-draggable";
import { FaBeer } from "react-icons/fa";
import TextInput from "./components/TextInput";
import { useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const handleSubmit = () => {
    console.log(data);
  };
  return (
    <div className="App">
      <div className="dragcompo">
        <div style={{ background: "gray", height: "100vh" }}>
          <button>
            <Draggable>
              <TextInput setData={setData}></TextInput>
            </Draggable>
          </button>
        </div>

        <div
          className="dropcomp"
          onDragOver={(e) => this.onDragOver(e)}
          style={{ width: "70%" }}
        >
          <p>Place the component</p>
          <button className="submit-btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
