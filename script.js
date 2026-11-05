
const bookElement = document.getElementById("book");

// Кітаптың 3D қозғалтқышы
const pageFlip = new St.PageFlip(bookElement, {

    // Бір парақтың өлшемі
    width: 450,
    height: 600,

    // Кітап өлшемі
    size: "stretch",

    minWidth: 280,
    maxWidth: 1000,

    minHeight: 350,
    maxHeight: 1400,

    // Мұқабаны жеке көрсету
    showCover: true,

    // Парақтың қозғалыс уақыты
    flippingTime: 1400,

    // Көлеңкелер
    drawShadow: true,
    maxShadowOpacity: 0.75,

    // Телефонға бейімдеу
    usePortrait: true,
    autoSize: true,
    mobileScrollSupport: false,

    // Беттерді басу арқылы аудару
    disableFlipByClick: false,

    // Бастапқы бет
    startPage: 0,

    // Қабаттардың реті
    startZIndex: 10,

    // Беттің бұрышын бүгу
    showPageCorners: true,

    // Қолмен сүйреу
    swipeDistance: 30
});

// HTML ішіндегі беттерді жүктеу
pageFlip.loadFromHTML(
    document.querySelectorAll(".page")
);

// Бет ауысқанда
pageFlip.on("flip", (event) => {
    console.log("Қазіргі бет:", event.data + 1);
});

// Кітаптың бағыты өзгергенде
pageFlip.on("changeOrientation", (event) => {
    console.log("Кітап бағыты:", event.data);
});

// Анимация күйі өзгергенде
pageFlip.on("changeState", (event) => {
    console.log("Анимация күйі:", event.data);
});
