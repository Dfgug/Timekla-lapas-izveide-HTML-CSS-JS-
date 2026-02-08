console.log("JS pieslēgts un darbojas");

const button = document.getElementById("button");
const input = document.getElementById("input");
const article = document.querySelector("article");
const headerTitle = document.querySelector("header h1");

headerTitle.textContent = "Wikipedia fragments projekts";
headerTitle.style.color = "yellow";
headerTitle.style.fontSize = "28px";

const originalText = article.innerHTML;

button.addEventListener("click", function () {
    const value = input.value.trim();

    if (value === "") return;

    article.innerHTML = originalText;

    const regex = new RegExp(value, "gi");
    article.innerHTML = article.innerHTML.replace(regex, "<mark>$&</mark>");
});

article.addEventListener("dblclick", function () {
    article.classList.toggle("reading-mode");
});

const clearBtn = document.createElement("button");
clearBtn.textContent = "Notīrīt izcelšanu";
document.querySelector("main").appendChild(clearBtn);

clearBtn.addEventListener("click", function () {
    article.innerHTML = originalText;
    input.value = "";
});
