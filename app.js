const button = document.querySelector('button');
const h2 = document.querySelector('h2');
const bgcolor = document.querySelector('.container');

//On clicking button the background color changes and hexadecimal code is displayed on windw
button.addEventListener('click', () => {
    let color = '#';
    color += Math.random().toString(16).slice(2, 8);
    bgcolor.style.backgroundColor = color;
    h2.innerText = color;
    console.log(color);
});