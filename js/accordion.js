
const accordions = document.getElementsByClassName("accordion");

for (const accordion of accordions) {
    accordion.addEventListener("click", function () {
        const isActive = this.classList.toggle("active");
        const panel = this.nextElementSibling;

        // Close other open accordions
        const panels = document.getElementsByClassName("panel");
        for (const otherPanel of panels) {
            if (otherPanel !== panel) {
                otherPanel.style.maxHeight = null;
                otherPanel.previousElementSibling.classList.remove("active");
            }
        }

        // Open or close the clicked accordion
        if (isActive) {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } else {
            panel.style.maxHeight = null;
        }
    });
}


