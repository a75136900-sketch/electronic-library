
const book = document.getElementById("book");
const cover = document.getElementById("cover");

const sheets = Array.from(
    document.querySelectorAll(".sheet")
);

let isOpened = false;
let currentPage = 0;
let isAnimating = false;

const animationDuration = 1500;

// Қабаттарды реттеу
function updateLayers() {
    sheets.forEach((sheet, index) => {
        if (index < currentPage) {
            sheet.style.zIndex = index + 2;
        } else {
            sheet.style.zIndex = sheets.length - index + 10;
        }
    });
}

// Кітапты ашу
function openBook() {
    if (isOpened || isAnimating) return;

    isAnimating = true;
    isOpened = true;

    book.classList.add("opened");
    cover.classList.add("open");

    setTimeout(() => {
        isAnimating = false;
        updateLayers();
    }, 1800);
}

// Келесі бет
function nextPage() {
    if (!isOpened || isAnimating) return;
    if (currentPage >= sheets.length) return;

    isAnimating = true;

    const sheet = sheets[currentPage];

    sheet.classList.add("turning");
    sheet.classList.add("flipped");

    currentPage++;

    updateLayers();

    setTimeout(() => {
        sheet.classList.remove("turning");
        isAnimating = false;
    }, animationDuration);
}

// Алдыңғы бет
function previousPage() {
    if (!isOpened || isAnimating) return;
    if (currentPage <= 0) return;

    isAnimating = true;

    currentPage--;

    const sheet = sheets[currentPage];

    sheet.classList.remove("flipped");
    sheet.classList.add("turning-back");

    updateLayers();

    setTimeout(() => {
        sheet.classList.remove("turning-back");
        isAnimating = false;
    }, animationDuration);
}

// Басу арқылы басқару
book.addEventListener("click", function(event) {

    // Мұқабаны ашу
    if (event.target.closest(".cover")) {
        openBook();
        return;
    }

    if (!isOpened || isAnimating) return;

    const clickedSheet = event.target.closest(".sheet");

    if (!clickedSheet) return;

    // Оң жақ бет
    if (!clickedSheet.classList.contains("flipped")) {
        nextPage();
    }

    // Сол жақ бет
    else {
        previousPage();
    }
});

updateLayers();
