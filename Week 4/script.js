
const soundFiles = {
    sound1: "sounds/boom.wav",
    sound2: "sounds/clap.wav",
    sound3: "sounds/hihat.wav",
    sound4: "sounds/kick.wav",
    sound5: "sounds/openhat.wav",
    sound6: "sounds/ride.wav",
    sound7: "sounds/snare.wav",
    sound8: "sounds/tink.wav",
    sound9: "sounds/tom.wav",
  };
  
  const soundButtons = document.querySelectorAll('.sound-button');
  
  soundButtons.forEach(button => {
    const soundId = button.id;
  
    button.addEventListener("click", () => {
      if (soundFiles[soundId]) {
        const audio = new Audio(soundFiles[soundId]);
        audio.play();
      }
    });
  
    button.addEventListener("keydown", event => {
      if (event.keyCode === 13 && soundFiles[soundId]) {
        const audio = new Audio(soundFiles[soundId]);
        audio.play();
      }
    });
  });


document.addEventListener("keydown", event => {
  const key = event.key.toLowerCase();
  const soundId = `sound${key}`;

  if (soundFiles[soundId]) {
    const audio = new Audio(soundFiles[soundId]);
    audio.play();
  }
});
