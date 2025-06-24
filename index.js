const modal = document.getElementById("adModal");
const countdownEl = document.getElementById("countdown");
let seconds = 5;
let timeOut = false;
function showModal() {
    modal.style.display = "block";
    const interval = setInterval(() => {
        seconds--;
        countdownEl.textContent = seconds;
        if (seconds <= 0) {
            timeOut = true;
            clearInterval(interval);
        }
    }, 1000);
}
function closeModal() {
    if(timeOut) modal.style.display = "none";
}
window.onload = () => {
    setTimeout(showModal, 5000);
};

const cardsData = [
    { front: '<img src="IMG_5682.WEBP" alt="img1" />', back: 'Пластикові пляшки розкладаються на мікропластик під дією сонця, води та часу. Ці частки потрапляють у ґрунт, воду та живі організми.' , category: "engine"},
    { front: '<img src="p3.jpg" alt="img1" />', back: 'Синтетичні тканини, як-от поліестер, вивільняють мікропластик під час прання. Можна зменшити шкоду, обираючи натуральні тканини та використовуючи спеціальні мішки для прання (напр. Guppyfriend).', category: "brakes" },
    { front: '<img src="IMG_5684.JPG" alt="img1" />', back: 'Шини стираються під час руху, залишаючи мікроскопічні гумові частинки на дорогах. Дощ змиває ці частки в річки та моря.' , category: "engine"},
    { front: '<img src="IMG_5685.JPG" alt="img1" />', back: 'Пластикові пакети легко рвуться та розпадаються на дрібні шматки, що довго не розкладаються. Їх часто здуває вітер у природу, де вони стають джерелом мікропластику.', category: "brakes" },
    { front: '<img src="IMG_5686.WEBP" alt="img1" />', back: 'Одноразовий пластиковий посуд швидко ламається та кришиться, особливо під дією тепла. Такі предмети рідко переробляються і стають частинами мікропластикового забруднення.', category: "brakes" },
    { front: '<img src="IMG_5687.JPG" alt="img1" />', back: 'Багато пластикових іграшок ламаються або зношуються, утворюючи дрібні частинки. З часом ці уламки стають джерелом мікропластику у побутовому пилу.', category: "engine" },
    { front: '<img src="IMG_5688.JPG" alt="img1" />', back: 'Сигаретні фільтри містять ацетат целюлози, яка повільно розкладається на мікропластик. Недопалки, залишені на вулицях, легко потрапляють у довкілля.', category: "engine" },
    { front: '<img src="IMG_5689.JPG" alt="img1" />', back: 'Штучні газони виготовляють із синтетичних волокон, які з часом зношуються. Частинки мікропластику з них потрапляють у повітря та змиваються дощем.', category: "engine" },
];
const grid = document.getElementById('cardsGrid');
const category_filter = document.getElementById('category-filter');
function show(cards) {
    cards.forEach(card => {
        const cardHTML = `
        <div class="card-container">
          <div class="card">
            <div class="card-front">${card.front}</div>
            <div class="card-back">${card.back}</div>
          </div>
        </div>
      `;
        grid.innerHTML += cardHTML;
    });
}
show(cardsData);
function filter_func() {
    grid.innerHTML = '';
    if(category_filter.value === "all"){
        show(cardsData);
    }else{
        show(cardsData.filter(card => card.category === category_filter.value));
    }
}
function closeBox() {
    document.getElementById("subscribe-box").style.display = "none";
}
function subscribe() {
    const email = document.getElementById("email").value;
    const thank_you = document.getElementById("thankyoumessage");

    if (email && email.includes("@")) {
        thank_you.style.visibility = "visible";
        setTimeout(closeBox, 5000);
    } else {
        alert("Будь ласка, введіть дійсну email-адресу.");
    }
}