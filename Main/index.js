document.getElementById("year").textContent = new Date().getFullYear();

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

document.querySelector("#darkBtn").addEventListener("click", toggleDarkMode);