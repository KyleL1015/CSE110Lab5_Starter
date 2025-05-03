// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.querySelector("#voice-select");
  speechSynthesis.onvoiceschanged = () => {
    const voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = ''; // Clear placeholder/defaults

    voices.forEach((voice, index) => {
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = index;
      voiceSelect.appendChild(option);
    });
  };

  const talkButton = document.querySelector("button");
  const imgSelector = document.querySelector("img");
  const textToSpeak = document.querySelector("#text-to-speak");
  talkButton.addEventListener("click", function(){
    const voices = speechSynthesis.getVoices();
    const utterance = new SpeechSynthesisUtterance(textToSpeak.value);
    utterance.voice = voices[voiceSelect.value];

    utterance.onstart = () => {
      imgSelector.src = "assets/images/smiling-open.png";
    };
  
    utterance.onend = () => {
      imgSelector.src = "assets/images/smiling.png";
    };

    speechSynthesis.speak(utterance);
  });
}