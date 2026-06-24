
window.addEventListener("scroll", () => {

    const scroll = window.scrollY;

    const esquerda = document.querySelector(".esquerda");
    const direita = document.querySelector(".direita");
    const fundo = document.querySelector(".fundo");

    /* esquerda entra */
    esquerda.style.transform =
        `translate(${scroll}px, -50%)`;

    /* direita entra */
    direita.style.transform =
        `translate(${-scroll}px, -50%)`;

    /* fundo cresce */
    const escala = 0.5 + scroll / 1000;

    fundo.style.transform =
        `translate(-50%, -50%) scale(${escala})`;
});
