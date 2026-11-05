
const bookElement = document.getElementById("book");

if (typeof St === "undefined") {
    document.getElementById("pageInfo").textContent =
        "Кітапхананы жүктеу қатесі. Интернетті тексеріңіз.";
} else {
    const pageFlip = new St.PageFlip(bookElement, {
        width: 450,
        height: 600,

        size: "stretch",

        minWidth: 280,
        maxWidth: 450,

        minHeight: 350,
        maxHeight: 600,

        showCover: true,
        flippingTime: 1200,

        drawShadow: true,
        maxShadowOpacity: 0.7,

        // Екі бетті қатар көрсету
        usePortrait: false,

        autoSize: true,
        mobileScrollSupport: false,

        disableFlipByClick: false,
        startPage: 0,
        startZIndex: 10,
        showPageCorners: true,
        swipeDistance: 30
    });

    const pages = document.querySelectorAll(".page");

    pageFlip.loadFromHTML(pages);

    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const pageInfo = document.getElementById("pageInfo");

    function updateControls() {
        const currentPage = pageFlip.getCurrentPageIndex();
        const totalPages = pageFlip.getPageCount();

        prevBtn.disabled = currentPage <= 0;
        nextBtn.disabled = currentPage >= totalPages - 1;

        if (currentPage === 0) {
            pageInfo.textContent = "Алдыңғы мұқаба";
        } else if (currentPage === totalPages - 1) {
            pageInfo.textContent = "Артқы мұқаба";
        } else {
            pageInfo.textContent =
                "Беттер " + currentPage + "–" + (currentPage + 1);
        }
    }

    nextBtn.addEventListener("click", () => {
        pageFlip.flipNext();
    });

    prevBtn.addEventListener("click", () => {
        pageFlip.flipPrev();
    });

    pageFlip.on("flip", () => {
        updateControls();
    });

    updateControls();
}
