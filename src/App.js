import "./App.css";
import { students } from "../src/assets/data/studentdb.js";
import StudentTable from "./components/StudentTable";
import { useState } from "react";

function App() {
  const [fontSize, setFontSize] = useState(16); 

  const handleFontSize = (size) => {
    if (size === "S") setFontSize(12);
    else if (size === "M") setFontSize(16);
    else if (size === "L") setFontSize(20);
  };
  
  return (
    <>
      <div className="App" style={{fontSize :`${fontSize}px`}}>
        <h1>Students Information Portal</h1>
        <hr />
        <div className="fontSize">
          Font Size : 
          <button onClick={()=>handleFontSize("S")}>S</button>
          <button onClick={()=>handleFontSize("M")}>M</button>
          <button onClick={()=>handleFontSize("L")}>L</button>
        </div>
        <table>
          <tbody>
            <tr>
              <td>
                <StudentTable students={students} className={fontSize} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
