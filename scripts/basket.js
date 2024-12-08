const basket = document.querySelector('.popup');
const itemCard = basket.querySelector('.popup-items');
const totalPrice = basket.querySelector('.popup-end');
const totalPriceIndex = document.querySelector('.basket_text');
const countCircle = document.querySelector('.basket_circle');
const cards = [
    'Семена Кукуруза Ранняя Лакомка 121',
    'Семена Дыня Лада',
    'Семена Капуста белокочанная Настя F1',
    'Семена Томат Москвич',
    'Семена Патиссон Солнышко',
    'Семена Баклажан Алмаз',
];

updateBasket = () => {
    itemCard.innerHTML = "";
    let countPrice = 0;
    let circle = 0;
    cards.forEach(element => {
        const savedCard = JSON.parse(localStorage.getItem(element));
        if (savedCard === null) {
            return
        }
        countPrice += savedCard.price * savedCard.count;
        circle += savedCard.count;
        itemCard.innerHTML += `
        <div class="popup-product">
          <img src="${savedCard.img}" alt="">
          <p>${savedCard.name}</p>
          <div class="spend">
            <p>${savedCard.price}₽</p>
            <p class="popup-count">${savedCard.count} шт.</p>
            <p>${savedCard.price * savedCard.count}₽</p>
          </div>
          <button class="popup-delete">Удалить</button>
        </div>
    `;
    });


    totalPrice.children[1].innerHTML = `${countPrice}₽`;

    if (circle != 0) {
        countCircle.classList.remove('unactive');
        countCircle.innerHTML = circle;   
    } else { 
        countCircle.classList.add('unactive');
    }
    
    totalPriceIndex.innerHTML = `Корзина<br>${countPrice}₽`;
    if (itemCard.innerHTML == "") {
        itemCard.innerHTML = "<p>Корзина пуста</p>";
    } else {
        const allProducts = itemCard.querySelectorAll('.popup-product');
        allProducts.forEach(element => {
            const productName = element.children[1].textContent;
            const deleteBtn = element.querySelector('.popup-delete');

            deleteBtn.addEventListener('click', () => {
                localStorage.removeItem(productName);
                updateBasket();
            })
        })
    }

};
updateBasket();

const closeBtn = basket.querySelector('.popup-close')
closeBtn.addEventListener('click', () => {
    basket.style.display = 'none';
})

const basketBtn = document.querySelector('.basket')
basketBtn.addEventListener('click', () => {
    basket.style.display = "block";
    updateBasket();
})
