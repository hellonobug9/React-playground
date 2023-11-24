import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
const url =
  "https://devgrapeseedmaterial.blob.core.windows.net/gl-content-page/GSv4/REP/01/Activity%20Pages/GSv4-U1-REP-U01_Writing-Fun-%20page-4.png?sv=2018-03-28&sr=c&sig=IlHHWoV3D5KdJgtUlCgXKjsJnveexDdBVP013yiKwmE%3D&st=2023-11-24T02%3A30%3A53Z&se=2023-11-24T04%3A30%3A53Z&sp=r";
function App() {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    function preloadImage(url: string) {
      const img = new Image();
      img.src = url;
    }
    preloadImage(url);
  }, []);
  return (
    <>
      <div>
        {shown ? <img width={500} height={500} src={url} alt="" /> : null}
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setShown((prev) => !prev)}>
          TOGGLE IMAGE
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
