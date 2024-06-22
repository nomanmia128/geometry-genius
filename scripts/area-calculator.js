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

    // validate input: width and length
    if(isNaN(base) || isNaN(height)){
        alert('please insert a number');
        return;
    }

    const area = 0.5 * base * height;
    // console.log(area)

    // show tringle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;

}

function calculateRectangleArea(){
    // get rectangle width
    const widthField = document.getElementById('rectangle-wight');
    const wightValueText = widthField.value;
    const wight = parseFloat(wightValueText);
    console.log(wight);
    
    // get rectangle length
    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    console.log(length);

    // validate input: width and length
    if(isNaN(wight) || isNaN(length)){
        alert('please insert a number');
        return;
    }

    // calculate area
    const area = wight * length;

    // show rectangle area 
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;

}

// reusable function ---> reduce duplicate code
function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    
     // validate
     if(isNaN(base) || isNaN(height)){
        alert('please insert a number');
        return;
    }

    const area = base * height;
    setElementInnerText('parallelogram-area', area);
}

// reusable get input value field in number
function calculateEllipseArea(){
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');
    const area = 3.14 * majorRadius * minorRadius;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText('ellipse-area', areaTwoDecimal);
}

// reusable get input value field in number 
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const getInputValueText = inputField.value;
    const value = parseFloat(getInputValueText);
    return value;
}

// reusable set span, p, div, etc text 
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}





// Data validation
/**
 * 1. set the proper type of the input field. (number, data, email)
 * 2. check type using typeof 
 * 3. NaN means: not a Number. isNaN is checking wheckig whether the input is not a number or not
 */