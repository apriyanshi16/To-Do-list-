function confetti() {
    const duration = 500;
    const end = Date.now() + duration;

    const colors = ["#ff0", "#0f0", "#0ff", "#f0f", "#f00"];

    (function frame() {
        confettiOne({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors,
        });
        confettiOne({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors,
        });

        if (Date.now() < end) requestAnimationFrame(frame);
    })();
}
