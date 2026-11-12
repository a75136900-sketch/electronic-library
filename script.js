const bookElement = document.getElementById("book");

if (typeof St === "undefined") {
    console.error("PageFlip кітапханасын жүктеу қатесі. Интернетті тексеріңіз.");
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
}
