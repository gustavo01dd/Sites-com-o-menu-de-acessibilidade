// Abrir e fechar menu acessibilidade
const botaoAcessibilidade = document.getElementById("botao-acessibilidade");
const opcoesAcessibilidade = document.getElementById("opcoes-acessibilidade");

botaoAcessibilidade.addEventListener("click", () => {
  opcoesAcessibilidade.classList.toggle("active");
  const expanded = botaoAcessibilidade.getAttribute("aria-expanded") === "true";
  botaoAcessibilidade.setAttribute("aria-expanded", !expanded);
});

// Funções de aumentar/diminuir fonte
let fontSize = 100; // tamanho inicial em %

document.getElementById("aumentar-fonte").addEventListener("click", () => {
  fontSize += 10;
  document.body.style.fontSize = fontSize + "%";
});

document.getElementById("diminuir-fonte").addEventListener("click", () => {
  if (fontSize > 60) { // limite mínimo
    fontSize -= 10;
    document.body.style.fontSize = fontSize + "%";
  }
});
