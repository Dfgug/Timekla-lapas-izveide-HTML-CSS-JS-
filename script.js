console.log("JS pieslēgts un darbojas");

const button = document.getElementById("button");
const input = document.getElementById("input");
const article = document.querySelector("article");
const headerTitle = document.querySelector("header h1");

headerTitle.textContent = "Wikipedia fragments projekts";
headerTitle.style.color = "yellow";

const originalText = article.innerHTML;


function highlightWord(word) {

    article.innerHTML = originalText;

    if (word.trim() === "") {
        alert("Введите слово для поиска");
    } else {
        const regex = new RegExp(word, "gi");

        if (regex.test(originalText)) {
            article.innerHTML = originalText.replace(regex, "<mark>$&</mark>");
        } else {
            alert("Слово не найдено");
        }
    }
}


button.addEventListener("click", function () {
    highlightWord(input.value);
});


article.addEventListener("dblclick", function () {
    article.classList.toggle("reading-mode");
});


const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const error = document.getElementById("error");


function validateForm(name, email, message) {

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        error.style.color = "red";
        error.textContent = "Visi lauki ir obligāti";
        return false;

    } else if (!email.includes("@")) {
        error.style.color = "red";
        error.textContent = "Nepareizs e-pasts";
        return false;

    } else if (message.length < 5) {
        error.style.color = "red";
        error.textContent = "Ziņojums ir pārāk īss";
        return false;

    } else {
        error.style.color = "green";
        error.textContent = "Ziņojums nosūtīts veiksmīgi!";
        form.reset();
        return true;
    }
}


form.addEventListener("submit", function (e) {
    e.preventDefault();

    validateForm(
        nameInput.value,
        emailInput.value,
        messageInput.value
    );
});

const clearBtn = document.createElement("button");
clearBtn.textContent = "Notīrīt izcelšanu";
clearBtn.classList.add("clear-btn");

document.querySelector(".search-box").appendChild(clearBtn);

clearBtn.addEventListener("click", function () {
    article.innerHTML = originalText;
    input.value = "";
});
