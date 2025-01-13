let main = document.getElementById('main');
let count = 50;
for (let i = 0; i < count; i++) {
    let leftRain = Math.floor(Math.random()*main.clientWidth);
    let topRain = Math.floor(Math.random()*main.clientHeight);
    let widthRain = Math.floor(Math.random()*50);
    let timeRain = Math.floor((Math.random()*5) + 5);
    let div = document.createElement('div');
    div.classList.add(['rain']);
    div.style.left = leftRain + 'px';
    div.style.top = topRain + 'px';
    div.style.width = widthRain / 0.88 + 'px';
    div.style.height = widthRain + 'px';
    div.style.animationDuration = timeRain + 's';
    main.appendChild(div);
}
