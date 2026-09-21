// --- TF2 Banner Setup ---
const tf2Image = document.getElementById('TF2');
const tf2Audio = document.getElementById('HoverAudio');

tf2Image.addEventListener('mouseenter', () => {
    tf2Audio.currentTime = 0;
    tf2Audio.play().catch(error => {
        console.log("Playback blocked until the user interacts with the page first.");
    });
});

tf2Image.addEventListener('mouseleave', () => {
    tf2Audio.pause();
    tf2Audio.currentTime = 0;
});


// --- Lambda Sign Setup (Fixed Variable Names) ---
const lambdaImage = document.getElementById('Lambda');
const lambdaAudio = document.getElementById('Valve_Boom');

lambdaImage.addEventListener('mouseenter', () => {
    lambdaAudio.currentTime = 0;
    lambdaAudio.play().catch(error => {
        console.log("Playback blocked until the user interacts with the page first.");
    });
});

lambdaImage.addEventListener('mouseleave', () => {
    lambdaAudio.pause();
    lambdaAudio.currentTime = 0;
});
