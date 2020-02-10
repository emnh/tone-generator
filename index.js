import * as Tone from "tone";

// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var fmsynth = new Tone.PolySynth();
fmsynth.volume.value = -10.0;
var synth = fmsynth.toDestination();

//schedule a series of notes, one per second
/*
synth.triggerAttackRelease('C4', 0.5, 0)
synth.triggerAttackRelease('E4', 0.5, 1)
synth.triggerAttackRelease('G4', 0.5, 2)
synth.triggerAttackRelease('B4', 0.5, 3)
*/

Tone.start();

const interval = 1 * 1000;
const length = 4;

function handler() {
  appDiv.innerHTHML += '<p>New tone</p>';
  const time = Tone.context.currentTime.toFixed(3);
  const freq = 60 + Math.random() * 60;
  synth.triggerAttackRelease(freq, length, time + 0.01);
  setTimeout(handler, interval);
}

handler();
//setTimeout(handler, interval);