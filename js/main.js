/* ============== typing animation ============== */
let typed = new Typed(".typing", {
    strings: ["Back-End Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

/* ============== page slider ============== */
window.onload = () => {
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
                // element.classList.add('d-none')
                // setTimeout(() => {
                //     element.classList.add('d-none')
                // }, 300)
            }
        })
    })
})