document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const optionsList = document.getElementById("optionsList");

    searchInput.addEventListener("input", function () {
        const searchText = searchInput.value.toLowerCase();
        const options = optionsList.getElementsByTagName("li");

        for (const option of options) {
            const optionText = option.textContent.toLowerCase();
            option.style.display = optionText.includes(searchText) ? "block" : "none";
        }

        optionsList.style.display = searchText ? "block" : "none";
    });

    searchInput.addEventListener("blur", function () {
        setTimeout(function () {
            optionsList.style.display = "none";
        }, 200);
    });

    searchInput.addEventListener("focus", function () {
        optionsList.style.display = searchInput.value ? "block" : "none";
        optionsList.style.display = "block"; // Exibir a lista quando o campo recebe foco
    });

    optionsList.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            searchInput.value = event.target.textContent;
            optionsList.style.display = "none";
        }
    });
});