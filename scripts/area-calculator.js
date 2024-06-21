function calculateTrigleArea(){
    // get tringle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText)
    // console.log(base);

    // get tringle height value
    const heightField = document.getElementById('triangle-hight');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    // console.log(height);

    const area = 0.5 * base * height;
    // console.log(area)

    // show tringle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;

}

