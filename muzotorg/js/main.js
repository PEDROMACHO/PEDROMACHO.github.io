var modal = document.getElementById("myModal");

var overlay = document.getElementById("overlay");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
    overlay.style.display = "block";

}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    overlay.style.display = "none";
}
// When the user clicks on <span> (x), close the modal
overlay.onclick = function () {
    modal.style.display = "none";
    overlay.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
// overlay.onclick = function() {
//     modal.style.display = "none";
//     overlay.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//         overlay.style.display = "none";
//     }
// }


document.addEventListener('DOMContentLoaded', function () {
    const typeIcon = document.querySelectorAll('.type-grid-item');

    typeIcon.forEach(function (item) {
        item.addEventListener('click', function () {
            let img = item.querySelector('.type-grid-img');
            let text = item.querySelector('.type-grid-text');
            let data = img.getAttribute('data-active');
            let src = img.getAttribute('data-src');
            let btn = item.querySelector('.radio-btn');

            // if (!item.classList.contains('active') && btn.checked) {
            //     img.setAttribute("src", data);
            //     text.style.color = '#FF3855';
            //     item.classList.add('active');
            // }


        });
    });



    const file = document.querySelector('.file-view');
    file.addEventListener('click', function () {
        let real = document.querySelector('.input-hide');
        real.click();
    });


    const fileSec = document.querySelector('.file-view-sec-new');
    fileSec.addEventListener('click', function () {
        let real = document.querySelector('.input-hide-sec');
        real.click();
    });


    const burger = document.querySelector('.nav-burger');
    burger.addEventListener('click', function () {
        let menu = document.querySelector('.nav-main-item');
        if (!menu.classList.contains('nav-menu-active')) {
            menu.classList.add('nav-menu-active');
            this.classList.add('burger-active');
        } else {
            menu.classList.remove('nav-menu-active');
            this.classList.remove('burger-active');
        }
    });

}, false);