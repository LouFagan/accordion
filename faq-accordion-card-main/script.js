let accordionBtn = document.querySelectorAll('.accordion__question');
let collapse = document.querySelectorAll('.accordion__collapse');
let arrow = document.querySelector('.accordion__question::after');

for (let i = 0; i < accordionBtn.length; i++) {
    //console.log(accordionBtn[i]);
    accordionBtn[i].addEventListener('click', function () {

        if (collapse[i].className === 'accordion__collapse') {
            collapse[i].classList.toggle('open');
            accordionBtn[i].classList.toggle('open');
            //arrow[i].style.transform = "rotate(180deg)";

        } else {
            collapse[i].className = 'accordion__collapse';
            accordionBtn[i].className = 'accordion__question';
        }
    });

}