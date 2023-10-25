const cost = document.getElementsByClassName('cost');
let total = 0;

for(i = 0; i < cost.length; i++) {
    total += Number(cost[i].textContent.slice(0, -1));
}

const totalElement = document.getElementById('total');

totalElement.textContent = total + '₽';

const btn = document.getElementById('btn');

btn.addEventListener('click', function(evt) {
    if(!btn.classList.contains('click')) {
        totalElement.textContent = Number(totalElement.textContent.slice(0, -1)) / 100 * 80 + "₽";
        btn.classList.add('click');
    }
});
