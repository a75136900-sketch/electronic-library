
const bookElement = document.getElementById("book");

const pageFlip = new St.PageFlip(bookElement, {
    width: 450,
    height: 600,

    size: "stretch",
    minWidth: 280,
    maxWidth: 900,
    minHeight: 350,
    maxHeight: 1200,

    drawShadow: true,
    maxShadowOpacity: 0.8,

    flippingTime: 1200,

    usePortrait: true,
    startPage: 0,
    startZIndex: 10,

    autoSize: true,
    showCover: true,

    mobileScrollSupport: false,
    disableFlipByClick: false,

    showPageCorners: true,
    swipeDistance: 30
});

// HTML ішіндегі барлық беттерді кітапқа жүктеу
const pages = document.querySelectorAll(".page");

pageFlip.loadFromHTML(pages);

// Батырмалар
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageInfo = document.getElementById("pageInfo");

// Алға қарай парақтау
nextBtn.addEventListener("click", () => {
    pageFlip.flipNext();
});

// Артқа қарай парақтау
prevBtn.addEventListener("click", () => {
    pageFlip.flipPrev();
});

// Бет ауысқан сайын батырмалар мен нөмірді жаңарту
function updateControls() {
    const currentPage = pageFlip.getCurrentPageIndex();
    const totalPages = pageFlip.getPageCount();

    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = currentPage >= totalPages - 1;

    if (currentPage === 0) {
        pageInfo.textContent = "Алдыңғы мұқаба";
    } else if (currentPage === totalPages - 1) {
        pageInfo.textContent = "Артқы мұқаба";
    } else {
        pageInfo.textContent =
            `Бет ${currentPage} / ${totalPages - 2}`;
    }
}

// Парақ аударылғанда ақпаратты жаңарту
pageFlip.on("flip", () => {
    updateControls();
});

// Кітап жүктелгеннен кейін бастапқы күйді көрсету
updateControls();
