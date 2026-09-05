/*!
 * +AI theme pack "lcars-mono" — behaviour (packs/lcars-mono/behaviour.js)
 *
 * Bridge dressing carried over from the legacy lcars-mono.html page:
 * the 24-hour chronometer + decorative stardate, and the tactile audio
 * blips (opt-out persists as plus-ai-lcars-audio). Sound is decorative;
 * silence is always acceptable.
 */
window.PlusAISpecPackScripts = window.PlusAISpecPackScripts || {};
window.PlusAISpecPackScripts["lcars-mono"] = function (api) {
  "use strict";

  function readPreference(key) {
    try { return localStorage.getItem(key); } catch { return null; }
  }
  function savePreference(key, value) {
    try { localStorage.setItem(key, value); } catch { /* storage unavailable — fully usable without it */ }
  }

  var clock = document.getElementById("lcarsClock");
  var stardate = document.getElementById("lcarsStardate");
  var audioToggle = document.getElementById("audioToggle");
  var soundEnabled = readPreference("plus-ai-lcars-audio") !== "off";
  var audioContext = null;
  var interval = null;

  function tickChronometer() {
    var now = new Date();
    var hours = String(now.getHours()).padStart(2, "0");
    var minutes = String(now.getMinutes()).padStart(2, "0");
    var seconds = String(now.getSeconds()).padStart(2, "0");
    if (clock) clock.textContent = hours + ":" + minutes + ":" + seconds;

    var year = now.getFullYear();
    var yearStart = Date.UTC(year, 0, 1);
    var yearEnd = Date.UTC(year + 1, 0, 1);
    var fraction = (now.getTime() - yearStart) / (yearEnd - yearStart);
    if (stardate) stardate.textContent = "STARDATE " + year + "." + String(Math.floor(fraction * 1000)).padStart(3, "0");
  }

  function updateAudioControl() {
    if (!audioToggle) return;
    audioToggle.textContent = soundEnabled ? "AUDIO" : "MUTED";
    audioToggle.classList.toggle("is-muted", !soundEnabled);
    audioToggle.setAttribute("aria-pressed", String(!soundEnabled));
  }

  function blip(frequency, duration, volume) {
    frequency = frequency === undefined ? 740 : frequency;
    duration = duration === undefined ? 0.05 : duration;
    volume = volume === undefined ? 0.045 : volume;
    if (!soundEnabled) return;
    try {
      var AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      audioContext = audioContext || new AudioContextClass();
      if (audioContext.state === "suspended") audioContext.resume();
      var now = audioContext.currentTime;
      var oscillator = audioContext.createOscillator();
      var gain = audioContext.createGain();
      oscillator.type = "square";
      oscillator.frequency.setValueAtTime(frequency, now);
      gain.gain.setValueAtTime(volume, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
      oscillator.connect(gain);
      gain.connect(audioContext.destination);
      oscillator.start(now);
      oscillator.stop(now + duration + 0.02);
    } catch {
      // Decorative sound; silence is always acceptable.
    }
  }

  function onAudioToggle() {
    soundEnabled = !soundEnabled;
    savePreference("plus-ai-lcars-audio", soundEnabled ? "on" : "off");
    updateAudioControl();
    if (soundEnabled) blip(660, 0.07, 0.05);
  }

  function onDocumentClick(event) {
    if (event.target.closest("#audioToggle")) return;
    if (event.target.closest(".control, a[href^=\"#\"]")) blip();
  }

  function onDocumentChange(event) {
    if (event.target.matches("select")) blip(880, 0.04);
  }

  updateAudioControl();
  tickChronometer();
  interval = setInterval(tickChronometer, 1000);
  audioToggle && audioToggle.addEventListener("click", onAudioToggle);
  document.addEventListener("click", onDocumentClick);
  document.addEventListener("change", onDocumentChange);

  return function cleanup() {
    if (interval) clearInterval(interval);
    audioToggle && audioToggle.removeEventListener("click", onAudioToggle);
    document.removeEventListener("click", onDocumentClick);
    document.removeEventListener("change", onDocumentChange);
    if (audioContext && typeof audioContext.close === "function") {
      try { audioContext.close(); } catch { /* already closed */ }
    }
  };
};
