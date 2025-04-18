//  yuklanganda sichqoncha harakati kuzatiladi
document.addEventListener('mousemove', function (e) {
    let body = document.querySelector('body');
    //spanni yaratdim
    let image = document.createElement('span');

    //miwkaning pozitsiyasi
    let x = e.offsetX;
    let y = e.offsetY;

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

})


