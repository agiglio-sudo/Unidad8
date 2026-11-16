let edad = 62;
let sexo = "mujer";

if ((sexo == "mujer" && edad >= 60) || (sexo == "hombre" && edad >= 65)) {
    document.getElementById("resultado").innerHTML = "¡Podés jubilarte!";
} else {
    document.getElementById("resultado").innerHTML = "Todavía no podés jubilarte";
}
