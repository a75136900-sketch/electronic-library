
const book = document.getElementById("book");
const cover = document.getElementById("cover");

const sheets = Array.from(
    document.querySelectorAll(".sheet")
);

let isOpened = false;
let currentPage = 0;

// Беттердің қабаттасу ретін орнату
function updateLayers() {
    sheets.forEach((sheet, index) => {
        if (index < currentPage) {
            // Аударылған беттер сол жақта қалады
            sheet.style.zIndex = index + 1;
        } else {
            // Аударылмаған беттер оң жақта тұрады
            sheet.style.zIndex = sheets.length - index + 10;
        }
    });
}

// Кітапты ашу
function openBook() {
    if (isOpened) return;

    isOpened = true;

    cover.classList.add("open");

    updateLayers();
}

// Келесі бетке өту
function nextPage() {
    if (!isOpened) return;

    if (currentPage < sheets.length) {
        sheets[currentPage].classList.add("flipped");

        currentPage++;

        updateLayers();
    }
}

// Алдыңғы бетке қайту
function previousPage() {
    if (!isOpened) return;

    if (currentPage > 0) {
        currentPage--;

        sheets[currentPage].classList.remove("flipped");

        updateLayers();
    }
}

// Тышқанмен кітап беттерін басқару
book.addEventListener("click", function(event) {

    // Мұқабаны басу
    if (event.target.closest(".cover")) {
        openBook();
        return;
    }

    if (!isOpened) return;

    // Оң жақ бетті басу — келесі бет
    if (event.target.closest(".right-page")) {
        nextPage();
        return;
    }

    // Сол жақ бетті басу — алдыңғы бет
    if (event.target.closest(".left-page")) {
        previousPage();
    }
});

// Бастапқы беттердің орналасуы
updateLayers();
