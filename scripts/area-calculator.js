function calculatetriangleArea(){
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

    addToCalculationEntry('triangle', area);

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

    addToCalculationEntry('rectangle', area);

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

    // add to calculation 
 addToCalculationEntry('parallelogram', area)

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

// add to calculation entry
/**
 * 1. get the element where you want to add the dynamic HTML
 * 2. create  an element you want to add
 * 3. if needed add some class
 * 4. set inner HTML. it could be dynamic Template string 
 * 5. append the created element as a child of the parent
 */
function addToCalculationEntry(areatype, area){
    console.log(areatype + ' ' + area)
    const addToCalculationEntry = document.getElementById
    ('calculation-entry');

    const count = addToCalculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1} ${areatype} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`;

    addToCalculationEntry.appendChild(p);

}



// Data validation
/**
 * 1. set the proper type of the input field. (number, data, email)
 * 2. check type using typeof 
 * 3. NaN means: not a Number. isNaN is checking wheckig whether the input is not a number or not
 */