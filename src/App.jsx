import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

function App() {
  const handleCameraChanged = (ev) => {
    console.log("camera changed:", ev.detail.center, "zoom:", ev.detail.zoom);
  };

  return (
    <>
      <APIProvider
        apiKey={"AIzaSyCEJS1vkc9VeHxdDbUezovaHyDY5ve1QPM"}
        onLoad={() => console.log("Maps API has loaded.")}
      >
        <Map
          defaultZoom={13}
          defaultCenter={{ lat: -33.860664, lng: 151.208138 }}
          onCameraChanged={handleCameraChanged}
        />
      </APIProvider>
    </>
  );
}

export default App;
