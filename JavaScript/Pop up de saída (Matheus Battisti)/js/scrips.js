const popup = document.querySelector("#popup");
const cancelButton = document.querySelector("#cancel-button");

localStorage.removeItem("popupDisplayed");

document.addEventListener("mouseout", (event) => {
    const popupDisplayed = localStorage.getItem("popupDisplayed");
    if (!popupDisplayed && event.relatedTarget === null) {
        popup.style.display = "block";
    }
});

cancelButton.addEventListener("click", () => {
    popup.style.display = "none";

    localStorage.setItem("popupDisplayed", true);
})