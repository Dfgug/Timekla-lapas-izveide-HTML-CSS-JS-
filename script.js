console.log("JS pieslēgts un darbojas");

const button = document.getElementById("button");
const input = document.getElementById("input");
const article = document.querySelector("article");

const originalText = article.innerHTML;


button.addEventListener("click", function () {

    const searchText = input.value.trim();

    if (searchText === "") {
        alert("Ievadi meklējamo vārdu!");
        return;
    }

    article.innerHTML = originalText;

    const regex = new RegExp(searchText, "gi");

    if (regex.test(article.innerHTML)) {
        article.innerHTML = article.innerHTML.replace(regex, `<mark>$&</mark>`);
    } else {
        alert("Vārds netika atrasts!");
    }
});


article.addEventListener("dblclick", function () {
    article.classList.toggle("reading-mode");
});
