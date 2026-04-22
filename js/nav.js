document.addEventListener("DOMContentLoaded", () => {

    // Active link
    const links = document.querySelectorAll("nav a");
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        const linkPage = link.getAttribute("href");
        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });

    // Dynamic nav
    const dynamicNav = document.getElementById("dynamicNav");

    if (dynamicNav) {
        if (currentPage === "" || currentPage === "index.html") {
            dynamicNav.textContent = "Services";
            dynamicNav.setAttribute("href", "#services");

            const servicesSection = document.getElementById("services");

            if (servicesSection) {
                dynamicNav.addEventListener("click", (e) => {
                    e.preventDefault();
                    servicesSection.scrollIntoView({ behavior: "smooth" });
                });
            }
        } else {
            dynamicNav.textContent = "Home";
            dynamicNav.setAttribute("href", "index.html");
        }
    }
});