const projeler = [
    { ad: "E-Ticaret Sitesi", kategori: "web" },
    { ad: "Blog Sitesi", kategori: "web" },
    { ad: "Mobil Oyun", kategori: "mobil" },
    { ad: "Todo App", kategori: "mobil" },
    { ad: "Portfolyo", kategori: "web" }
];

// PROJE GÖSTER
function goster(liste) {
    const alan = document.getElementById("projeListesi");
    alan.innerHTML = "";

    liste.forEach(p => {
        alan.innerHTML += `
        <div class="proje">
            <h3>${p.ad}</h3>
            <p>${p.kategori}</p>
        </div>`;
    });
}

// FİLTRE
function filtrele(kategori) {
    if (kategori === "hepsi") {
        goster(projeler);
    } else {
        const filtreli = projeler.filter(p => p.kategori === kategori);
        goster(filtreli);
    }
}

// DARK MODE
document.getElementById("temaBtn").onclick = () => {
    document.body.classList.toggle("dark");
};

// TYPING EFFECT
const yazi = "Merhaba, ben Efe 👋";
let i = 0;

function yaz() {
    if (i < yazi.length) {
        document.getElementById("typing").innerHTML += yazi.charAt(i);
        i++;
        setTimeout(yaz, 50);
    }
}

yaz();

// BAŞLANGIÇ
goster(projeler);