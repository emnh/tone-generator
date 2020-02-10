import * as Tone from "tone";

// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var synth = new Tone.FMSynth().toMaster()

//schedule a series of notes, one per second
/*
synth.triggerAttackRelease('C4', 0.5, 0)
synth.triggerAttackRelease('E4', 0.5, 1)
synth.triggerAttackRelease('G4', 0.5, 2)
synth.triggerAttackRelease('B4', 0.5, 3)
*/

function handler() {
  synth.triggerAttackRelease('C4', 0.5, 0)
}

setTimeout(handler, 1000);