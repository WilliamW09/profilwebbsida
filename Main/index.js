document.getElementById("year").textContent = new Date().getFullYear();

function toggleDarkMode() {
    localStorage.setItem("theme", "dark");
    localStorage.setItem("lastVisit", date.now());

    document.body.classList.toggle("dark");
    document.querySelector(".rubrik h1").classList.toggle("dark");

    if (document.body.classList.contains("dark")) { localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
     }
}

document.querySelector("#darkBtn").addEventListener("click", toggleDarkMode);

function loadTheme() {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.body.classList.add("dark");
    }
}


const lastVisit = localStorage.getItem("lastVisit");
if (lastVisit) {
    const FIVE_MINUTES = 1000 * 60 * 5;
    const now = Date.now();
    const timePassed = now - lastVisit;
    if (timePassed > FIVE_MINUTES) {
        localStorage.removeItem("theme");
        localStorage.removeItem("lastVisit");  
        
    }
}

loadTheme();