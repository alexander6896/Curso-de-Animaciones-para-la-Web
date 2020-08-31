const $button = document.getElementById('button');
const $bell = document.getElementById('notification');
//numero = 0;
$button.addEventListener('click', (event) => {
    //console.log(numero);
    const count = Number($bell.getAttribute('data-count')) || 0;
    $bell.setAttribute('data-count', count + 1);
    $bell.classList.add('show-count');
    $bell.classList.add('notify');
    //$bell.style.content = numero;
    //numero++;
});

$bell.addEventListener('animationend', (event) => {
    $bell.classList.remove('notify');
});