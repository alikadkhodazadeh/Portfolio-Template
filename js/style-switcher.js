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