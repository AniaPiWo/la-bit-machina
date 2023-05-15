import React from "react";
import {createRoot} from "react-dom";
import { Header } from "./components/Header/Header.jsx";
import { Metronome } from "./components/Metronome/Metronome.jsx";
import { SampleBtns } from "./components/SamplesBtns/SamplesBtns.jsx";

const App = () => {
    
    return (
      <div>
        <Header/>
        <Metronome/>
        <SampleBtns sampleName={"KICK"} valueBtn={16}/>
        <SampleBtns sampleName={"SNARE"} valueBtn={16}/>
        <SampleBtns sampleName={"HH OPEN"} valueBtn={16}/>
        <SampleBtns sampleName={"HH CLOSED"} valueBtn={16}/>
        <SampleBtns sampleName={"CLAP"} valueBtn={16}/>
        <SampleBtns sampleName={"RIM"} valueBtn={16}/>
        <SampleBtns sampleName={"TOM"} valueBtn={16}/>
      </div>
    );
  };
  

const root = document.getElementById('root');
createRoot(root).render(<App />);
