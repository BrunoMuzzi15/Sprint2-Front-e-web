function ativarModo() {
    document.body.style.background = "#111";
    document.body.style.color = "white";
}

function ativarModo() {
    document.getElementById("modo").style.display = "block";
}

function fazerLogin() {

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if(email === "" || senha === "") {

        alert("Preencha todos os campos!");

    } else {

        alert("Login realizado com sucesso!");

        window.location.href = "../index.html";
    }
}