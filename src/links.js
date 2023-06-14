const links = document.querySelectorAll("#links>.card");

links.forEach(link => {
    link.addEventListener("click", () => {
        window.open(link.dataset.link, "_blank")
    })
});
