const $hideButton = document.getElementById('hide-modal');
const $visibilityButton = document.getElementById('visibility-modal');
const $modal = document.getElementById('modal');
const $modalNo = document.getElementById('modal-no');
const $overlay = document.getElementById('overlay');

$hideButton.addEventListener('click', (event) => {
    //console.log(event);
    $modal.style.animation = 'modalOut .8s forwards';
    //$overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    /* $overlay.style.transition = '1s';
    $overlay.style.opacity = '0'; */
    $overlay.classList.remove('active');
    $modalNo.style.visibility = 'hidden';

});

$visibilityButton.addEventListener('click', (event) => {
    //console.log(event);
    $modalNo.style.visibility = 'visible';
    $modalNo.style.transition = '1s';
    $modalNo.style.opacity = '1';
});