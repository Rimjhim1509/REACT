const generateColor = ()=>{
    const r= Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);

    return `rgb(${r},${g},${b})`;

}
const updateColor = () => {
    const color = generateColor();
    const colorBox = document.getElementById('colorCode');
    const colorcode = document.getElementById('colorcode')
    colorBox.style.backgroundColor = color;
    colorcode.innerText = color;
}
updateColor();