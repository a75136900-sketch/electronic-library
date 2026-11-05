
const cover = document.getElementById("cover");

const papers = [
    document.getElementById("paper1"),
    document.getElementById("paper2"),
    document.getElementById("paper3")
];

let currentPage = 0;
let isOpened = false;

function openBook() {
    if (isOpened) return;

    cover.classList.add("open");
    isOpened = true;

    document.getElementById("pageNumber").textContent = "1–2 бет";
}

function nextPage() {
    if (!isOpened) {
        openBook();
        return;
    }

    if (currentPage < papers.length) {
        papers[currentPage].classList.add("flipped");
        currentPage++;
        updatePageNumber();
    }
}

function previousPage() {
    if (currentPage > 0) {
        currentPage--;
        papers[currentPage].classList.remove("flipped");
        updatePageNumber();
    }
}

function updatePageNumber() {
    if (currentPage === 0) {
        document.getElementById("pageNumber").textContent = "1–2 бет";
    } else {
        document.getElementById("pageNumber").textContent =
            (currentPage * 2 + 1) + "–" +
            (currentPage * 2 + 2) + " бет";
    }
}

function closeBook() {
    papers.forEach(paper => {
        paper.classList.remove("flipped");
    });

    currentPage = 0;
    isOpened = false;

    cover.classList.remove("open");

    document.getElementById("pageNumber").textContent = "Мұқаба";
}
