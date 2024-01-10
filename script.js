// enabled the circle light when hovering the products

let cards = document.querySelectorAll(".product");
cards.forEach (card => {
    cards.onmousemove = function(e) {
        let x = e.pageX - card.offsetLeft;
        let y = e.pageY - card.offsetTop;

        card.style.setProperty("--x", x + "px");
        card.style.setProperty("--y", y + "px");
    }
})                                                                                    