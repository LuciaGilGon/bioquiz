document.addEventListener("DOMContentLoaded", function () {
    const switchBtn = document.getElementById("darkModeSwitch");

    if (!switchBtn) return;

    switchBtn.addEventListener("change", function () {
        document.body.classList.toggle("dark");
    });
});