const card = document.querySelectorAll('.card');

card.forEach(element => {
    const cardImg = element.querySelector('.card-img').src;
    const cardName = element.querySelector('.card-name').textContent;
    const cardPrice = element.querySelector('.pricejs').textContent;
    const buyBtn = element.querySelector('.card_button');
    let cardArr = {};

    const cardCounter = element.querySelector('.card_counter');
    const countHTML = cardCounter.children[1];
    const minus = cardCounter.children[0];
    const plus = cardCounter.children[2];
    let count = JSON.parse(localStorage.getItem(cardName));

    if (count === null) {
        count = Number(countHTML.textContent);
    } else {
        count = count.count;
        countHTML.innerHTML = count;
    }


    plus.addEventListener('click', () => {
        if (count >= 99) {
            return
        }
        count++;
        countHTML.innerHTML = count;
    })

    minus.addEventListener('click', () => {
        if (count <= 1) {
            return
        }
        count--;
        countHTML.innerHTML = count;
    })

    buyBtn.addEventListener('click', () => {
        cardArr.name = cardName;
        cardArr.img = cardImg;
        cardArr.price = Number(cardPrice.slice(0, -1));
        cardArr.count = count;
        localStorage.setItem(cardName, JSON.stringify(cardArr));
        updateBasket();
    })
    
});
