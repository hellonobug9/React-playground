import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
const url =
  "https://grapeseedmaterial-fcezbbbeesgpcwbg.z01.azurefd.net/gl-content-page/GSv4/Classroom%20Materials/40/Song%20Posters/GSv4-U40-CM-Can%20You%20Hear%20Me-%20page-2.png?sv=2018-03-28&sr=c&sig=ApcctgI1UU7pXPxgpSw2B%2BS031qx9zewG%2FusE%2FUUtPg%3D&st=2023-11-22T08%3A53%3A43Z&se=2023-11-22T10%3A53%3A43Z&sp=r";
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
