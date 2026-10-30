
/* ========================================
   1. MENU PARA CELULAR
======================================== */

const botaoMenu = document.getElementById("botaoMenu");
const menuLinks = document.getElementById("menuLinks");

if (botaoMenu && menuLinks) {
    botaoMenu.addEventListener("click", function () {
        const menuAberto = menuLinks.classList.toggle("ativo");

        botaoMenu.setAttribute("aria-expanded", menuAberto);
        botaoMenu.setAttribute(
            "aria-label",
            menuAberto ? "Fechar menu" : "Abrir menu"
        );

        botaoMenu.textContent = menuAberto ? "✕" : "☰";
    });

    menuLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            menuLinks.classList.remove("ativo");
            botaoMenu.setAttribute("aria-expanded", "false");
            botaoMenu.setAttribute("aria-label", "Abrir menu");
            botaoMenu.textContent = "☰";
        });
    });
}


/* ========================================
   2. MODO CLARO E ESCURO
======================================== */


const botaoTema = document.getElementById("botaoTema");

if (botaoTema) {
    botaoTema.addEventListener("click", function () {
        document.body.classList.toggle("modo-escuro");

        const modoEscuroAtivo =
            document.body.classList.contains("modo-escuro");

        botaoTema.textContent = modoEscuroAtivo ? "☀️" : "🌙";
    });
}



/* ========================================
   3. SAUDAÇÃO
======================================== */

const saudacao = document.getElementById("saudacao");

if (saudacao) {
    const hora = new Date().getHours();

    if (hora < 12) {
        saudacao.textContent = "Bom dia! Seja bem-vindo(a) ao meu portfólio.";
    } else if (hora < 18) {
        saudacao.textContent = "Boa tarde! Seja bem-vindo(a) ao meu portfólio.";
    } else {
        saudacao.textContent = "Boa noite! Seja bem-vindo(a) ao meu portfólio.";
    }
}


/* ========================================
   4. ANO AUTOMÁTICO NO RODAPÉ
======================================== */

const anoAtual = document.getElementById("anoAtual");

if (anoAtual) {
    anoAtual.textContent = new Date().getFullYear();
}


/* ========================================
   5. FORMULÁRIO DE CONTATO
======================================== */

const formulario = document.getElementById("formularioContato");

if (formulario) {
    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const nome = document.getElementById("nome");
        const email = document.getElementById("email");
        const mensagem = document.getElementById("mensagem");
        const consentimento = document.getElementById("consentimento");

        const erroNome = document.getElementById("erroNome");
        const erroEmail = document.getElementById("erroEmail");
        const erroMensagem = document.getElementById("erroMensagem");
        const erroConsentimento =
            document.getElementById("erroConsentimento");

        const mensagemFormulario =
            document.getElementById("mensagemFormulario");

        let formularioValido = true;

        // Limpa os erros anteriores
        if (erroNome) erroNome.textContent = "";
        if (erroEmail) erroEmail.textContent = "";
        if (erroMensagem) erroMensagem.textContent = "";
        if (erroConsentimento) erroConsentimento.textContent = "";

        if (mensagemFormulario) {
            mensagemFormulario.textContent = "";
        }

        // Valida o nome
        if (!nome || nome.value.trim().length < 2) {
            if (erroNome) {
                erroNome.textContent = "Digite seu nome completo ou nome válido.";
            }
            formularioValido = false;
        }

        // Valida o e-mail
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email || !emailValido.test(email.value.trim())) {
            if (erroEmail) {
                erroEmail.textContent = "Digite um e-mail válido.";
            }
            formularioValido = false;
        }

        // Valida a mensagem
        if (!mensagem || mensagem.value.trim().length < 10) {
            if (erroMensagem) {
                erroMensagem.textContent =
                    "Escreva uma mensagem com pelo menos 10 caracteres.";
            }
            formularioValido = false;
        }

        // Verifica o consentimento
        if (!consentimento || !consentimento.checked) {
            if (erroConsentimento) {
                erroConsentimento.textContent =
                    "Marque a opção de consentimento para continuar.";
            }
            formularioValido = false;
        }

        // Mostra o resultado da validação
        if (formularioValido) {
            if (mensagemFormulario) {
                mensagemFormulario.textContent =
                    "Formulário validado com sucesso! Para enviar a mensagem de verdade, é necessário conectar um serviço de envio.";
            }

            formulario.reset();
        }
    });
}
