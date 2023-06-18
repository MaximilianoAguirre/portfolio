const linksCards = document.querySelectorAll("#links>.card");
linksCards.forEach(link => {
    link.addEventListener("click", () => {
        window.open(link.dataset.link, "_blank")
    })
});


const links = document.querySelector("#links")
links.addEventListener("click", (e) => {
    document.elementsFromPoint(e.pageX, e.pageY).find(el => el.classList.contains("tile")).click()
})
