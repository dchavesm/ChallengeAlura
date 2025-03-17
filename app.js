let listaAmigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreIngresado = inputAmigo.value.trim();

    if (!nombreIngresado) {
        alert("Ingresa un amigo para continuar");
        return;
    }

    if (listaAmigos.includes(nombreIngresado)) {
        alert(`El nombre "${nombreIngresado}" ya está en la lista. Ingresa otro nombre.`);
        return;
    }

    listaAmigos.push(nombreIngresado);

    inputAmigo.value = "";
    inputAmigo.focus();

    console.log(listaAmigos);
    renderizarLista();
}

function renderizarLista() {
    let listaElementos = document.getElementById("listaAmigos");
    listaElementos.innerHTML = "";

    for (let i = 0; i < listaAmigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = listaAmigos[i];
        listaElementos.appendChild(item);
    }
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceSorteado];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
}