document.addEventListener("DOMContentLoaded", () => {
    const switchBtn = document.getElementById("darkModeSwitch");

    if (!switchBtn) {
        console.log("Switch no encontrado");
        return;
    }

    switchBtn.addEventListener("change", () => {
        document.body.classList.toggle("dark");
    });
});