 // Theme switching functionality
const changeThemeButton = document.getElementById("changeTheme");
const body = document.body;
let isDarkTheme = false;

changeThemeButton.addEventListener("click", () => {
    body.style.backgroundColor = isDarkTheme ? "lightblue" : "purple"; /* Light blue and purple colors */
    isDarkTheme = !isDarkTheme;
    alert("Changed theme successfully");
});

// Digital clock functionality
const clock = document.createElement("h2");
clock.id = "clock";
document.body.appendChild(clock);

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    clock.textContent = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`; // 24-hour format
}

updateClock();
setInterval(updateClock, 1000);
