// 1. SELECT ALL ELEMENTS FIRST (Fixes the breakdown)
const muteBtn = document.getElementById('muteToggle');

const tf2Image = document.getElementById('TF2');
const tf2Audio = document.getElementById('HoverAudio');

const lambdaImage = document.getElementById('Lambda');
const lambdaAudio = document.getElementById('Valve_Boom');

// 2. MUTE BUTTON LOGIC (Uses native .muted property)
let isMuted = false;

muteBtn.addEventListener('click', () => {
    isMuted = !isMuted; // Switch tracking state

    // Apply the mute state directly to the audio elements
    tf2Audio.muted = isMuted;
    lambdaAudio.muted = isMuted;

    if (isMuted) {
        muteBtn.textContent = '🔇 Unmute Sounds';
        muteBtn.classList.add('is-muted');

        // Force-pause whatever happens to be playing right now
        tf2Audio.pause();
        lambdaAudio.pause();
    } else {
        muteBtn.textContent = '🔊 Mute Sounds';
        muteBtn.classList.remove('is-muted');
    }
});

// 3. TF2 HOVER EVENT LISTENERS
tf2Image.addEventListener('mouseenter', () => {
    if (isMuted) return; // Immediate exit if user muted sounds

    tf2Audio.currentTime = 0;
    tf2Audio.play().catch(() => {
        console.log("Playback blocked until user interaction.");
    });
});

tf2Image.addEventListener('mouseleave', () => {
    tf2Audio.pause();
    tf2Audio.currentTime = 0;
});

// 4. LAMBDA HOVER EVENT LISTENERS
lambdaImage.addEventListener('mouseenter', () => {
    if (isMuted) return; // Immediate exit if user muted sounds

    lambdaAudio.currentTime = 0;
    lambdaAudio.play().catch(() => {
        console.log("Playback blocked until user interaction.");
    });
});

lambdaImage.addEventListener('mouseleave', () => {
    lambdaAudio.pause();
    lambdaAudio.currentTime = 0;
});
