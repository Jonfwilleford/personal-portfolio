document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("projectsContainer");
    if (!container) return;

    fetch("js/projects.json")
        .then(res => res.json())
        .then(projects => {
            projects.forEach((p, i) => {
                container.appendChild(createCard(p, i));
            });
        });

    const modal   = document.getElementById("moreInfoModal");
    const details = document.getElementById("projectDetails");
    const closeBtn = document.querySelector(".close");

    container.addEventListener("click", e => {
        const card = e.target.closest(".service-card[data-index]");
        if (!card) return;

        const idx = parseInt(card.dataset.index, 10);

        fetch("js/projects.json")
            .then(r => r.json())
            .then(projects => {
                const p = projects[idx];
                details.innerHTML = `
                    <h2>${p.title}</h2>
                    <p>${p.description}</p>
                    <p class="tech-stack">Tech: ${p.tech.join(" · ")}</p>
                `;
                modal.classList.add("open");
            });
    });

    if (closeBtn) closeBtn.addEventListener("click", () => modal.classList.remove("open"));

});

function createCard(p, index) {
    const card = document.createElement("div");
    card.classList.add("service-card");
    card.dataset.index = index;
    card.style.cursor = "pointer";

    card.innerHTML = `
        <div class="service-num">${toRoman(index + 1)}</div>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <p class="tech-stack">Tech: ${p.tech.join(" · ")}</p>
        <div class="project-links">
            <a href="${p.github}" target="_blank" class="cta-btn">GitHub</a>
            ${p.demo ? `<a href="${p.demo}" target="_blank" class="cta-btn">Live</a>` : ""}
        </div>
    `;

    return card;
}

function toRoman(num) {
    const romans = ["I","II","III","IV","V","VI","VII","VIII","IX","X"];
    return romans[num - 1] || String(num);
}