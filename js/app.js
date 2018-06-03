function init() {
    //menu
    var menuWithSub = document.querySelector('.menu-el:nth-child(1)');
    var subMenu = document.querySelector('.sub-menu');

    menuWithSub.addEventListener('mouseover', function () {
        subMenu.style.visibility = 'visible';
        subMenu.style.opacity = '1';

    });
    menuWithSub.addEventListener('mouseout', function () {
        subMenu.style.visibility = 'hidden';
        subMenu.style.opacity = '0';

    });

    //picture title
    var col1 = document.querySelector('.col1');
    var col2 = document.querySelector('.col2');
    var col1Header = document.querySelector('.col1 h2');
    var col2Header = document.querySelector('.col2 h2');

    col1.addEventListener('mouseover', function () {
        col1Header.style.visibility = 'hidden';
        col1Header.style.opacity = '0';
    });

    col1.addEventListener('mouseout', function () {
        col1Header.style.visibility = 'visible';
        col1Header.style.opacity = '1';
    });

    col2.addEventListener('mouseover', function () {
        col2Header.style.visibility = 'hidden';
        col2Header.style.opacity = '0';
    });

    col2.addEventListener('mouseout', function () {
        col2Header.style.visibility = 'visible';
        col2Header.style.opacity = '1';
    });

    var sliderImage = document.querySelectorAll(`.slide-col ul li div`);
    var btnPrev = document.querySelector(`.prev`);
    var btnNext = document.querySelector(`.next`);
    var sliderCount = 0;
    sliderImage[sliderCount].classList.add("visible");


    btnNext.addEventListener(`click`, function onClick(e) {
        sliderImage[sliderCount].classList.remove(`visible`);
        sliderCount++;
        if (sliderCount > sliderImage.length - 1) {
            sliderCount = 0;
        }
        sliderImage[sliderCount].classList.add(`visible`);

    });

    btnPrev.addEventListener(`click`, function onClick(e) {
        sliderImage[sliderCount].classList.remove(`visible`);
        sliderCount--;
        if (sliderCount < 0) {
            sliderCount = sliderImage.length - 1;
        }
        sliderImage[sliderCount].classList.add(`visible`);

    });


    /* application */

    var listArrow = document.querySelectorAll('.list_arrow');

    var listPanel = document.querySelectorAll(`.list_panel`);

    const sum = document.querySelector(`.sum`);

    let variable1 = 0;
    let variable2 = 0;
    let variable3 = 0;
    let variable4 = 0;

    for (let i = 0; i < listArrow.length; i++) {
        listArrow[i].addEventListener(`click`, function () {
            listPanel[i].classList.toggle(`collapsed`);
        })
    }

    /* listPanel[0] */
    const listPanel0Li = listPanel[0].querySelectorAll(`li`);

    const titleValue = document.querySelector(`.title.value`);

    const label = document.querySelectorAll(`.drop_down_list .list_label`);

    for (let i = 0; i < listPanel0Li.length; i++) {
        listPanel0Li[i].addEventListener(`click`, function () {
            titleValue.innerText = Number(listPanel0Li[i].dataset.price);

            label[0].innerText = listPanel0Li[i].innerText;
            label[0].style.color = `#585858`;

            variable1 = Number(titleValue.innerText);

            sum.innerText = variable1 + variable2 + variable3 + variable4;
        });

    }


    /* listPanel[1] */
    const listPanel1Li = listPanel[1].querySelectorAll(`li`);

    const colorValue = document.querySelector(`.color.value`);


    for (let i = 0; i < listPanel1Li.length; i++) {
        listPanel1Li[i].addEventListener(`click`, function () {
            colorValue.innerText = Number(listPanel1Li[i].dataset.price);

            label[1].innerText = listPanel1Li[i].innerText;
            label[1].style.color = `#585858`;

            variable2 = Number(colorValue.innerText);

            sum.innerText = variable1 + variable2 + variable3 + variable4;
        });
    }

    /* listPanel[2] */
    const listPanel2Li = listPanel[2].querySelectorAll(`li`);

    const patternValue = document.querySelector(`.pattern.value`);

    for (let i = 0; i < listPanel2Li.length; i++) {
        listPanel2Li[i].addEventListener(`click`, function () {
            patternValue.innerText = Number(listPanel2Li[i].dataset.price);

            label[2].innerText = listPanel2Li[i].innerText;
            label[2].style.color = `#585858`;

            variable3 = Number(patternValue.innerText);

            sum.innerText = variable1 + variable2 + variable3 + variable4;
        });
    }

    //Checkbox

    const transportCheckbox = document.querySelector(`#transport`);
    const transportValue = document.querySelector('.transport.value');
    transportCheckbox.addEventListener('change', function () {
        if (this.checked) {
            transportValue.innerText = transportCheckbox.dataset.price;
        } else {
            transportValue.innerText = 0;
        }
        variable4 = Number(transportValue.innerText);
        sum.innerText = variable1 + variable2 + variable3 + variable4;
    });

}


document.addEventListener('DomContentLoaded', init())