import { useEffect, useState } from "react";
import "./App.css";
import Body from "./components/Body";
import loadingGif from "/assets/Loading_Gif.gif";
import Header from "./components/Header";

function App() {
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => isLoading(false), 500);
  }, []);

  return (
    <>
      {loading ? (
        <div id="loading">
          <img src={loadingGif} alt="loadingAnimation" />
        </div>
      ) : (
        <>
          <Header/>
          <Body />
        </>
      )}
    </>
  );
}

export default App;
