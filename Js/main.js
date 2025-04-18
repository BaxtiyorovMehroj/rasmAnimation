//  yuklanganda sichqoncha harakati kuzatiladi
function createImage(e) {
    let body = document.querySelector('body');
    let image = document.createElement('span');

    //miwkaning pozitsiyasi va telning 
    let x = e.offsetX || e.touches[0].clientX;
    let y = e.offsetY || e.touches[0].clientY;

    // yaratilgan spanni miwka bor yerga jonatamiz
    image.style.left = x + 'px';
    image.style.top = y + 'px'


    //rasm olchami
    let size = Math.random() * 80;
    image.style.width = 20 + size + 'px';
    image.style.height = 20 + size + 'px';

    // rasm buralishi
    let tarnsformValue = Math.random() * 360;
    image.style.transform = 'rotate(' + tarnsformValue + 'deg)';


    //yangi rasm qowdim
    body.appendChild(image);

    //1 s dan keyin rasm ochadi
    setTimeout(function () {
        image.remove();
    }, 1000)

}

// Kompyuter sichqonchasi uchun
document.addEventListener('mousemove', createImage);

// Telefon (sensor) qurilmalari uchun
document.addEventListener('touchmove', createImage);

