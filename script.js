// Função para abrir modal com conteúdo dinâmico
function openModal(type, src) {
    const modal = document.getElementById("modal");
    const modalBody = document.getElementById("modal-body");
    modalBody.innerHTML = "";

    if (type === "video") {
        modalBody.innerHTML = `
            <iframe width="100%" height="480" src="${src}" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    } else if (type === "image") {
        modalBody.innerHTML = `<img src="${src}" alt="Certificado">`;
    } else if (type === "pdf") {
        modalBody.innerHTML = `
            <iframe src="${src}" width="100%" height="100%" 
            style="border:none; border-radius:8px;"></iframe>`;
    }

    modal.style.display = "flex";
}

// Fechar modal no botão X
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const closeBtn = document.querySelector(".modal .close");

    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = "none";
        };
    }

    // Fechar clicando fora do conteúdo
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});


// ---------- Menu Hamburguer ----------
const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.querySelector(".sidebar");

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});