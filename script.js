console.log("JS pieslēgts un darbojas");

const button = document.getElementById("button");
const input = document.getElementById("input");
const article = document.querySelector("article");
const headerTitle = document.querySelector("header h1");

headerTitle.textContent = "Wikipedia fragments projekts";
headerTitle.style.color = "yellow";
headerTitle.style.fontSize = "28px";

const originalText = article.innerHTML;


function highlightWord(word) {

    article.innerHTML = originalText;

    if (word.trim() === "") {
        alert("Ievadiet vārdu meklēšanai");
    } else {
        const regex = new RegExp(word, "gi");

        if (regex.test(originalText)) {
            article.innerHTML = originalText.replace(regex, "<mark>$&</mark>");
        } else {
            alert("Vārds netika atrasts");
        }
    }
}


button.addEventListener("click", function () {
    highlightWord(input.value);
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
