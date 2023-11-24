import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// const url =
//   "https://devgrapeseedmaterial.blob.core.windows.net/gl-content-page/GSv4/REP/01/Activity%20Pages/GSv4-U1-REP-U01_Writing-Fun-%20page-4.png?sv=2018-03-28&sr=c&sig=IlHHWoV3D5KdJgtUlCgXKjsJnveexDdBVP013yiKwmE%3D&st=2023-11-24T02%3A30%3A53Z&se=2023-11-24T04%3A30%3A53Z&sp=r";

const listUrls = [
  "https://devgrapeseedmaterial.blob.core.windows.net/gl-content-page/Media/b8b4eee3-7df2-4d89-ac12-b2a3214e04d3/Page/3e2a802c-8996-42b7-9819-0f910f518464.png?sv=2018-03-28&sr=c&sig=CXCX93HboOEwxXVOes9std248ybwjNjy2CzcSumJEO4%3D&st=2023-11-24T04%3A43%3A19Z&se=2023-11-24T06%3A43%3A19Z&sp=r",
  "https://devgrapeseedmaterial.blob.core.windows.net/gl-content-page/GSv4/Classroom%20Materials/01/Story%20Posters/GSv4-U1-CM-Family%20at%20the%20Zoo-%20page-2.png?sv=2018-03-28&sr=c&sig=CXCX93HboOEwxXVOes9std248ybwjNjy2CzcSumJEO4%3D&st=2023-11-24T04%3A43%3A19Z&se=2023-11-24T06%3A43%3A19Z&sp=r",
  "https://devgrapeseedmaterial.blob.core.windows.net/gl-content-page/GSv4/Classroom%20Materials/01/Card%20Packs/Vocabulary%20cards/GSv4-U1-CM-bear-%20page-1.png?sv=2018-03-28&sr=c&sig=CXCX93HboOEwxXVOes9std248ybwjNjy2CzcSumJEO4%3D&st=2023-11-24T04%3A43%3A19Z&se=2023-11-24T06%3A43%3A19Z&sp=r",
  "https://devgrapeseedmaterial.blob.core.windows.net/gl-content-page/GSv4/Classroom%20Materials/01/Story%20Posters/GSv4-U1-CM-Family%20at%20the%20Zoo-%20page-3.png?sv=2018-03-28&sr=c&sig=CXCX93HboOEwxXVOes9std248ybwjNjy2CzcSumJEO4%3D&st=2023-11-24T04%3A43%3A19Z&se=2023-11-24T06%3A43%3A19Z&sp=r",
  "https://devgrapeseedmaterial.blob.core.windows.net/gl-content-page/GSv4/Classroom%20Materials/01/Card%20Packs/Vocabulary%20cards/GSv4-U1-CM-boys-%20page-1.png?sv=2018-03-28&sr=c&sig=CXCX93HboOEwxXVOes9std248ybwjNjy2CzcSumJEO4%3D&st=2023-11-24T04%3A43%3A19Z&se=2023-11-24T06%3A43%3A19Z&sp=r",
  "https://devgrapeseedmaterial.blob.core.windows.net/gl-content-page/GSv4/Classroom%20Materials/01/Story%20Posters/GSv4-U1-CM-Family%20at%20the%20Zoo-%20page-4.png?sv=2018-03-28&sr=c&sig=CXCX93HboOEwxXVOes9std248ybwjNjy2CzcSumJEO4%3D&st=2023-11-24T04%3A43%3A19Z&se=2023-11-24T06%3A43%3A19Z&sp=r",
  "https://devgrapeseedmaterial.blob.core.windows.net/gl-content-page/GSv4/Classroom%20Materials/01/Story%20Posters/GSv4-U1-CM-Family%20at%20the%20Zoo-%20page-5.png?sv=2018-03-28&sr=c&sig=CXCX93HboOEwxXVOes9std248ybwjNjy2CzcSumJEO4%3D&st=2023-11-24T04%3A43%3A19Z&se=2023-11-24T06%3A43%3A19Z&sp=r",
  "https://devgrapeseedmaterial.blob.core.windows.net/gl-content-page/GSv4/Classroom%20Materials/01/Story%20Posters/GSv4-U1-CM-Family%20at%20the%20Zoo-%20page-6.png?sv=2018-03-28&sr=c&sig=CXCX93HboOEwxXVOes9std248ybwjNjy2CzcSumJEO4%3D&st=2023-11-24T04%3A43%3A19Z&se=2023-11-24T06%3A43%3A19Z&sp=r",
  "https://devgrapeseedmaterial.blob.core.windows.net/gl-content-page/GSv4/Classroom%20Materials/01/Card%20Packs/Vocabulary%20cards/GSv4-U1-CM-mother-%20page-1.png?sv=2018-03-28&sr=c&sig=CXCX93HboOEwxXVOes9std248ybwjNjy2CzcSumJEO4%3D&st=2023-11-24T04%3A43%3A19Z&se=2023-11-24T06%3A43%3A19Z&sp=r",
  "https://devgrapeseedmaterial.blob.core.windows.net/gl-content-page/GSv4/Classroom%20Materials/01/Story%20Posters/GSv4-U1-CM-Family%20at%20the%20Zoo-%20page-7.png?sv=2018-03-28&sr=c&sig=CXCX93HboOEwxXVOes9std248ybwjNjy2CzcSumJEO4%3D&st=2023-11-24T04%3A43%3A19Z&se=2023-11-24T06%3A43%3A19Z&sp=r",
  "https://devgrapeseedmaterial.blob.core.windows.net/gl-content-page/GSv4/Classroom%20Materials/01/Story%20Posters/GSv4-U1-CM-Family%20at%20the%20Zoo-%20page-8.png?sv=2018-03-28&sr=c&sig=CXCX93HboOEwxXVOes9std248ybwjNjy2CzcSumJEO4%3D&st=2023-11-24T04%3A43%3A19Z&se=2023-11-24T06%3A43%3A19Z&sp=r",
  "https://devgrapeseedmaterial.blob.core.windows.net/gl-content-page/GSv4/Classroom%20Materials/01/Story%20Posters/GSv4-U1-CM-Family%20at%20the%20Zoo-%20page-9.png?sv=2018-03-28&sr=c&sig=CXCX93HboOEwxXVOes9std248ybwjNjy2CzcSumJEO4%3D&st=2023-11-24T04%3A43%3A19Z&se=2023-11-24T06%3A43%3A19Z&sp=r",
  "https://devgrapeseedmaterial.blob.core.windows.net/gl-content-page/GSv4/Classroom%20Materials/01/Story%20Posters/GSv4-U1-CM-Family%20at%20the%20Zoo-%20page-10.png?sv=2018-03-28&sr=c&sig=CXCX93HboOEwxXVOes9std248ybwjNjy2CzcSumJEO4%3D&st=2023-11-24T04%3A43%3A19Z&se=2023-11-24T06%3A43%3A19Z&sp=r",
  "https://devgrapeseedmaterial.blob.core.windows.net/gl-content-page/Media/8cd6a337-7cd0-4536-9946-9a95184fd3cb/Page/fc4152ef-68e3-41e2-85b8-4e48f44bd643.png?sv=2018-03-28&sr=c&sig=CXCX93HboOEwxXVOes9std248ybwjNjy2CzcSumJEO4%3D&st=2023-11-24T04%3A43%3A19Z&se=2023-11-24T06%3A43%3A19Z&sp=r",
  "https://devgrapeseedmaterial.blob.core.windows.net/gl-content-page/GSv4/Classroom%20Materials/01/Story%20Posters/GSv4-U1-CM-Family%20at%20the%20Zoo-%20page-1.png?sv=2018-03-28&sr=c&sig=CXCX93HboOEwxXVOes9std248ybwjNjy2CzcSumJEO4%3D&st=2023-11-24T04%3A43%3A19Z&se=2023-11-24T06%3A43%3A19Z&sp=r",
  "https://devgrapeseedmaterial.blob.core.windows.net/gl-content-page/GSv4/Classroom%20Materials/01/Story%20Posters/GSv4-U1-CM-Family%20at%20the%20Zoo-%20page-11.png?sv=2018-03-28&sr=c&sig=CXCX93HboOEwxXVOes9std248ybwjNjy2CzcSumJEO4%3D&st=2023-11-24T04%3A43%3A19Z&se=2023-11-24T06%3A43%3A19Z&sp=r",
  "https://devgrapeseedmaterial.blob.core.windows.net/gl-content-page/GSv4/Classroom%20Materials/01/Story%20Posters/GSv4-U1-CM-Family%20at%20the%20Zoo-%20page-12.png?sv=2018-03-28&sr=c&sig=CXCX93HboOEwxXVOes9std248ybwjNjy2CzcSumJEO4%3D&st=2023-11-24T04%3A43%3A19Z&se=2023-11-24T06%3A43%3A19Z&sp=r",
];

function App() {
  const [shown, setShown] = useState(false);
  // useEffect(() => {
  //   function preloadImage(url: string) {
  //     const img = new Image();
  //     img.src = url;
  //   }
  //   preloadImage(url);
  // }, []);
  return (
    <>
      <div>
        {shown
          ? listUrls.map((url) => (
              <div>
                <img width={500} height={500} src={url} alt="" />
              </div>
            ))
          : null}
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card ab">
        <button onClick={() => setShown((prev) => !prev)}>TOGGLE IMAGE</button>
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
