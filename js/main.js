/* ============== onload page ============== */
window.onload = () => {
    if (document.body.classList.contains("dark")) {
        icon.classList.remove("fa-moon")
        icon.classList.add("fa-sun")
    } else {
        icon.classList.remove("fa-sun")
        icon.classList.add("fa-moon")
    }
    
    const darkMode = localStorage.getItem("dark-mode")
    if (darkMode != null) {
        darkModeManagement(darkMode)
    } else {
        const systemIsDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
        localStorage.setItem("dark-mode", systemIsDarkMode)
    }

    let hash = document.location.hash.toLowerCase()
    if (hash === null || hash == "")
        hash = "#home"
    const id = hash.substring(1)
    try {
        const section = document.querySelector(`.section.${id}`)
        if (section != null) {
            const sectionElements = document.querySelectorAll(".section")
            sectionElements.forEach((element) => {
                if (element != section) {
                    element.classList.add('hidden')
                    element.classList.add('d-none')
                } else if (element === section) {
                    element.classList.remove('hidden')
                    element.classList.remove('d-none')
                }
            })
        }
    } catch (error) {}
}
/* ============== typing animation ============== */
const typed = new Typed(".typing", {
    strings: ["توسعه دهنده وب", "طراح دیتابیس های رابطه ای", "تست نویس نرم افزار"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

/* ============== dark mode ============== */
const dayNight = document.querySelector(".day-night")
const icon = dayNight.querySelector("i")
dayNight.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark")
    localStorage.setItem("dark-mode", isDark)
    if (isDark) {
        icon.classList.remove("fa-moon")
        icon.classList.add("fa-sun")
    } else {
        icon.classList.remove("fa-sun")
        icon.classList.add("fa-moon")
    }
})

function darkModeManagement(darkMode) {
    if (darkMode === "true") {
        document.body.classList.add("dark")
        icon.classList.add("fa-sun")
        icon.classList.remove("fa-moon")
    } else if (darkMode === "false") {
        document.body.classList.remove("dark")
        icon.classList.remove("fa-sun")
        icon.classList.add("fa-moon")
    } else {
        const systemIsDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches.toString().toLowerCase()
        localStorage.setItem("dark-mode", systemIsDarkMode)
        darkModeManagement(systemIsDarkMode)
    }
}

/* ============== page slider ============== */

const navItems = document.querySelectorAll(".aside .nav a")
navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
        const id = item.getAttribute("href").substring(1)
        const section = document.querySelector(`.section.${id}`)
        section.classList.remove('hidden')
        section.classList.remove('d-none')
        const sectionElements = document.querySelectorAll(".section")
        sectionElements.forEach((element) => {
            if (element != section && !section.classList.contains("hidden")) {
                element.classList.add('hidden')
            }
        })
    })
})