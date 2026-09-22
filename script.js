const quotes = [
    `"If your PC doesn't glow in the dark, are you even gaming?"`,
    `"Cable management is like flossing: everyone knows they should do it, but nobody actually does."`,
    `"Buying a prebuilt without checking specs first is wild!"`,
    `"More RGB equals at least 15% extra framerate, it's science."`
];

let quoteIndex = 0;
setInterval(() => {
    quoteIndex = (quoteIndex + 1) % quotes.length;
    const quoteElement = document.getElementById('quote-text');
    if (quoteElement) {
        quoteElement.innerText = quotes[quoteIndex];
    }
}, 5000);

function runVibeCheck() {
    const results = [
        "🔥 Absolute beast! RGB is blinding from space.",
        "⚠️ Warning: Your cable management is making Carter cry.",
        "✅ Approved! 10/10 airflow and zero bottleneck.",
        "❄️ Ice cold temps, ready for 4K ultra gaming!",
        "💥 Needs more fans and definitely more stickers!"
    ];
    document.getElementById("vibe-output").innerText = results[Math.floor(Math.random() * results.length)];
}

function predictFps() {
    const fpsValues = [
        "🚀 360+ FPS on Cyberpunk Ultra settings!",
        "⚡ 240 FPS locked solid. Smooth as butter.",
        "🖥️ 144 FPS in 14K resolution. Not bad!",
        "💨 60 FPS cinematic experience (console tears).",
        "🔥 500 FPS in Minecraft with shaders!"
    ];
    document.getElementById("fps-output").innerText = fpsValues[Math.floor(Math.random() * fpsValues.length)];
}

function generateRoast() {
    const roasts = [
        "Bro is gaming on a literal microwave from 2012.",
        "You spent $3,000 on a GPU just to play Roblox.",
        "That stock CPU cooler is screaming for mercy.",
        "Your mousepad has more dust than my grandmother's attic.",
        "Bro's monitor stand is literally a stack of textbooks."
    ];
    document.getElementById("roast-output").innerText = roasts[Math.floor(Math.random() * roasts.length)];
}
