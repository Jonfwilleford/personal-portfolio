document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactForm");
    if (!form) return;

    const success = document.getElementById("formSuccess");

    form.addEventListener("submit", async e => {
        e.preventDefault();

        const data = new FormData(form);

        const res = await fetch(form.action, {
            method: "POST",
            body: data,
            headers: { Accept: "application/json" }
        });

        if (res.ok) {
            form.reset();
            form.style.display = "none";
            if (success) success.style.display = "block";
        }
    });

});