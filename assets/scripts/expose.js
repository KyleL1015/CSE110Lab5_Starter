// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.querySelector("#horn-select");
  const audioSelector = document.querySelector("audio");
  const volumeSelect = document.querySelector("#volume-controls");
  const playButton = document.querySelector("button");

  hornSelect.addEventListener("change", function (){
    const selectedValue =  hornSelect.value;
    const hornImg = document.querySelectorAll("img")[0];
    hornImg.src = "assets/images/" + selectedValue + ".svg";
    hornImg.alt = selectedValue;
    const audioSelector = document.querySelector("audio");
    audioSelector.src = "assets/audio/" + selectedValue + ".mp3";
  });

  volumeSelect.addEventListener("input", function (){
    const sliderSelect = document.querySelector("#volume");
    const audioImg = document.querySelectorAll("img")[1];

    if (sliderSelect.value == 0) audioImg.src = "assets/icons/volume-level-0.svg";
    else if (sliderSelect.value >= 1 && sliderSelect.value < 33) audioImg.src = "assets/icons/volume-level-1.svg";
    else if (sliderSelect.value >= 33 && sliderSelect.value < 67) audioImg.src = "assets/icons/volume-level-2.svg";
    else if (sliderSelect.value >= 67) audioImg.src = "assets/icons/volume-level-3.svg";

    console.log(sliderSelect.value / 100);
    audioSelector.volume = sliderSelect.value / 100;
  });

  const jsConfetti = new JSConfetti();
  playButton.addEventListener("click", function (){
    audioSelector.play();
    playButton.disabled = true;

    async function launchConfetti() {

      await jsConfetti.addConfetti({
        confettiRaidus: 100 ,
        confettiNumber: 10,
        emojis: ['😈', '👿', '👹', '🥵', '💩']
      });
      console.log("Confetti animation completed!");

      playButton.disabled = false;
    }

    if (hornSelect.value == "party-horn") {
      launchConfetti();
    }else playButton.disabled = false;
  });

}