import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
const url =
  "https://devgrapeseedmaterial.blob.core.windows.net/gl-content-page/Media/05e2a46c-a091-4a5e-a310-a6d18570b01f/Page/db5af8fa-196f-404b-9207-79f7be93692f.png?sv=2018-03-28&sr=c&sig=rzxKorXXHU7JVeAciqi18dI1z1Tss7OHH9FI%2B9xNdjU%3D&st=2023-11-23T10%3A49%3A13Z&se=2023-11-23T12%3A49%3A13Z&sp=r";
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
