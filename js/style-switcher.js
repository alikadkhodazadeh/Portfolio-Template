/* ============== toggle style switcher ============== */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler")
const styleSwitcher = document.querySelector(".style-switcher")

styleSwitcherToggle.addEventListener("click", (e) => {
    styleSwitcher.classList.toggle("open")
})

// hide style - switcher on scroll
window.addEventListener("scroll", () => {
    if (styleSwitcher.classList.contains("open"))
        styleSwitcher.classList.remove("open")
})

/* ============== theme colors ============== */
const alternateStyles = document.querySelectorAll(".alternate-style")

function setActiveStyle(color) {
    alternateStyles.forEach((item) => {
        if (color === item.getAttribute("title"))
            item.removeAttribute("disabled")
        else
            item.setAttribute("disabled", "")
    })
}

/* ============== theme light and dark mode ============== */
const dayNight = document.querySelector(".day-night")
const icon = dayNight.querySelector("i")
dayNight.addEventListener("click", () => {
    icon.classList.toggle("fa-sun")
    icon.classList.toggle("fa-moon")
    document.body.classList.toggle("dark")
})
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        icon.classList.remove("fa-moon")
        icon.classList.add("fa-sun")
    } else {
        icon.classList.remove("fa-sun")
        icon.classList.add("fa-moon")
    }
})